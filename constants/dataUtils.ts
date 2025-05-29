
export const cleanParagraphs = (paragraphs: string[]): string[] => {
  // Regex for Vietnamese and English letters
  const letterChars = "a-zA-ZđưêôơĐƯÊÔƠáàảãạăắằẳẵặâấầẩẫậéèẻẽẹêếềểễệíìỉĩịóòỏõọôốồổỗộơớờởỡợúùủũụưứừửữựýỳỷỹỵÁÀẢÃẠĂẮẰẲẴẶÂẤẦẨẪẬÉÈẺẼẸÊẾỀỂỄỆÍÌỈĨỊÓÒỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢÚÙỦŨỤƯỨỪỬỮỰÝỲỶỸỴ";
  
  return paragraphs.map(p => {
    let cleanedP = p;

    // Case 1: Remove ".1" citation marker (e.g., "sentence.1 ", "word.1.", "text.1")
    // Replaces ".1" with "." if ".1" is NOT followed by a digit (to protect "1.1", "0.123", etc.)
    // and also not by a letter (to protect ".1a" if that were a format, though unlikely for citations).
    // It effectively targets ".1" when it's at the end of a sentence or followed by punctuation/space.
    cleanedP = cleanedP.replace(/\.1(?![0-9a-zA-ZđưêôơĐƯÊÔƠáàảãạăắằẳẵặâấầẩẫậéèẻẽẹêếềểễệíìỉĩịóòỏõọôốồổỗộơớờởỡợúùủũụưứừửữựýỳỷỹỵÁÀẢÃẠĂẮẰẲẴẶÂẤẦẨẪẬÉÈẺẼẸÊẾỀỂỄỆÍÌỈĨỊÓÒỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢÚÙỦŨỤƯỨỪỬỮỰÝỲỶỸỴ])/g, '.');

    // Case 2: Remove "1" citation marker when attached to a word (e.g., "Author1 ", "Reference1.")
    // Matches a letter, followed by "1", then NOT followed by a digit or letter.
    // This replaces "Letter1" with "Letter".
    const wordCharAndOneRegex = new RegExp(`([${letterChars}])1(?![0-9${letterChars}])`, 'g');
    cleanedP = cleanedP.replace(wordCharAndOneRegex, '$1');
    
    // The user's specific examples were " 1 " and ".1 ".
    // The ".1 " case is handled by Case 1 (e.g. "text.1 " becomes "text. ").
    // For " 1 " (space-1-space), if it's a citation like "[Ref 1]", it needs to be handled carefully
    // to avoid removing legitimate " 1 " like in "Page 1 of 10".
    // The current text primarily uses suffix citations like "word.1" or "word1".
    // If " 1 " (as a detached citation) needs specific removal, it could be:
    // cleanedP = cleanedP.replace(/(?<=\s)1(?=\s)/g, ''); // " 1 " -> "" (removes the 1, leaves spaces to collapse or be handled by context)
    // However, to be safer and avoid removing legitimate " 1 ", we'll rely on the more specific context-based removals above.
    // The current logic should handle the citations present in the provided text samples well.

    return cleanedP;
  });
};

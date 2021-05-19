const englishWordFor = (word) => {
  return 'Olá'
}

const japaneseWordFor = (word) => {
  return 'Ishinua'
}

const translate = (word, language) => {
  return new Promise((resolve, reject) => {
    if (language === 'english') {
      const translateWord = englishWordFor(word);
      resolve(translateWord);
    }else {
      reject("Language not found in my brain, sorry");
    }
  });
}

const execute = () => {
  translate('Olá' , 'japanese')
    .then((result) => console.log(result))
    .catch((error) => console.log(error))
}

execute();
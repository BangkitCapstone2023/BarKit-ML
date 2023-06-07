const readline = require('readline');

// Mendefinisikan kategori barang dan merek yang valid
const validBrands = {
  camera: ['canon', 'nikon', 'sony', 'fujifilm', 'panasonic'],
  speaker: ['bose', 'jbl', 'sonos', 'harman kardon', 'sony'],
  playstation: ['sony'],
  projector: ['epson', 'benq', 'optoma', 'viewsonic'],
  tenda: ['coleman', 'msr', 'the north face', 'quechua'],
  matras: ['therm-a-rest', 'klymit', 'nemo', 'exped'],
  sepatu: ['merrell', 'salomon', 'the north face', 'keen'],
  speaker: ['deuter', 'osprey', 'the north face', 'columbia']
};

// Fungsi untuk memvalidasi merek barang dalam kalimat
function validateBrand(category, sentence) {
  const lowercaseCategory = category.toLowerCase();
  const lowercaseSentence = sentence.toLowerCase();

  const validBrand = validBrands[lowercaseCategory].find((brand) => lowercaseSentence.includes(brand.toLowerCase()));

  if (validBrand) {
    return 'Inputan berhasil';
  } else {
    return 'Inputan gagal';
  }
}

// Membuat interface untuk membaca input dari pengguna
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Meminta pengguna memasukkan kategori barang
rl.question('Masukkan kategori barang : ', (category) => {
  // Meminta pengguna memasukkan kalimat
  rl.question('Masukkan Merek: ', (sentence) => {
    // Memvalidasi merek barang dalam kalimat
    const validation = validateBrand(category, sentence);
    console.log(validation);

    // Menutup interface readline setelah selesai
    rl.close();
  });
});

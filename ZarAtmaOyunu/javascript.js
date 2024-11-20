let zarLinkleri = [
  "https://upload.wikimedia.org/wikipedia/commons/c/c5/Dice-1.png",
  "https://upload.wikimedia.org/wikipedia/commons/1/18/Dice-2.png",
  "https://upload.wikimedia.org/wikipedia/commons/7/70/Dice-3.png",
  "https://upload.wikimedia.org/wikipedia/commons/a/a9/Dice-4.png",
  "https://upload.wikimedia.org/wikipedia/commons/6/6c/Dice-5.png",
  "https://upload.wikimedia.org/wikipedia/commons/5/5c/Dice-6.png",
];

function RandomSayiUret() {
  let randomDeger = Math.floor(Math.random() * zarLinkleri.length);

  console.log(zarLinkleri[randomDeger]);

  let zarResmiElementi = document.getElementById("zarResmi");

  zarResmiElementi.src = zarLinkleri[randomDeger];
}

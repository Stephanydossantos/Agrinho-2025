function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}
let alimentosX = 200;
let caminhaoX = 600;

function setup() {
  createCanvas(800, 400);
  textFont("Arial");
}

function draw() {
  background(200, 230, 255);
  desenhaCampo();
  desenhaCidade();
  animarTroca();
  mostrarTexto();
}

function desenhaCampo() {
  // Grama
  fill(34, 139, 34);
  rect(0, 300, 400, 100);

  // Sol
  fill(255, 255, 0);
  ellipse(80, 80, 80, 80);

  // Fazenda
  fill(139, 69, 19);
  rect(100, 200, 100, 80);
  fill(255);
  triangle(100, 200, 150, 150, 200, 200);

  // Plantações
  fill(0, 100, 0);
  for (let i = 0; i < 5; i++) {
    rect(60 + i * 30, 290, 20, 10);
  }

  // Caminho entre campo e cidade
  fill(100);
  rect(380, 300, 40, 100);
}

function desenhaCidade() {
  // Rua
  fill(50);
  rect(400, 300, 400, 100);

  // Prédios
  for (let i = 0; i < 3; i++) {
    fill(180);
    rect(500 + i * 100, 200 - i * 30, 60, 100 + i * 30);
    fill(255, 255, 0);
    rect(510 + i * 100, 220 - i * 30, 20, 20);
  }
}

function animarTroca() {
  // Alimento indo do campo para a cidade
  fill(255, 200, 0);
  ellipse(alimentosX, 280, 20, 20);
  alimentosX += 1;
  if (alimentosX > 800) alimentosX = 200;

  // Caminhão indo da cidade para o campo
  fill(150);
  rect(caminhaoX, 320, 60, 30);
  fill(0);
  ellipse(caminhaoX + 10, 350, 15, 15);
  ellipse(caminhaoX + 50, 350, 15, 15);
  caminhaoX -= 1;
  if (caminhaoX < -60) caminhaoX = 600;
}

function mostrarTexto() {
  fill(0);
  textSize(14);
  text("Campo", 160, 20);
  text("Cidade", 620, 20);

  textSize(16);
  text("O campo envia alimentos para a cidade →", 150, 270);
  text("← A cidade envia transporte, tecnologia e serviços", 310, 380);
}

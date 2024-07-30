document.getElementById('downloadBtn').addEventListener('click', () => {
  setTimeout(baixaTxt, 1000);
});


function baixaTxt() {

  // Conteúdo do arquivo de texto
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  const conteudo = `Email: ${email}\nSenha: ${senha}`;

  const blob = new Blob([conteudo], { type: 'text/plain' });

  // Cria um link de download
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'hash.txt';

  // Adiciona o link ao DOM e simula o clique para iniciar o download
  document.body.appendChild(link);
  link.click();

  // Remove o link do DOM
  document.body.removeChild(link);

  document.getElementById("email").value = '';
  document.getElementById("senha").value = '';
};

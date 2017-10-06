var mensagens = [];

$(function(){
	$.getJSON("content/data/mensagens.json", function(result){
		mensagens = result.mensagens;
		
		trocarMensagem();
	});

	$('[data-bebe]').on('click', function(){
		trocarMensagem();
	});
});

function trocarMensagem(){
	var qtdItens = mensagens.length;
  	var index = Math.floor(Math.random() * qtdItens)

  	switch(mensagens[index].tipo){
  		case "Texto":
  			$('[data-conteudo]').attr('class','aspas');
  			$('[data-conteudo]').html(mensagens[index].conteudo);
  			break;
		case "Imagem":
			$('[data-conteudo]').attr('class','aspas');
  			$('[data-conteudo]').html('<img src="'+ mensagens[index].conteudo +'" alt="" />');
  			break;
		case "HtmlCode":
			$('[data-conteudo]').attr('class','');
  			$('[data-conteudo]').html(mensagens[index].conteudo);
  			break;
  	}
}
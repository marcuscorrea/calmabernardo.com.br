$(function(){
	$.getJSON("content/data/mensagens.json", function(result){
		var qtdItens = result.mensagens.length;
	  	var index = Math.floor(Math.random() * qtdItens)

	  	switch(result.mensagens[index].tipo){
	  		case "Texto":
	  			$('[data-conteudo]').attr('class','aspas');
	  			$('[data-conteudo]').html(result.mensagens[index].conteudo);
	  			break;
  			case "Imagem":
  				$('[data-conteudo]').attr('class','aspas');
	  			$('[data-conteudo]').html('<img src="'+ result.mensagens[index].conteudo +'" alt="" />');
	  			break;
  			case "HtmlCode":
  				$('[data-conteudo]').attr('class','');
	  			$('[data-conteudo]').html(result.mensagens[index].conteudo);
	  			break;
	  	}
	});
});
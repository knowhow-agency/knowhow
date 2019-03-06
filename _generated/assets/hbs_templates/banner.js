define(["handlebars"], function(Handlebars) { return Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<section class=\"banner\">\n"
    + ((stack1 = container.invokePartial(partials.header,depth0,{"name":"header","data":data,"indent":"\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n	<div class=\"banner__popup\">\n		<button class=\"close-btn\"><img src=\"assets/img/close-button.svg\"></button>\n		<div class=\"popup__container\">\n			<video id=\"popup-video\" autoplay src=\"assets/img/popup.mp4\"></video>\n		</div>\n	</div>\n\n	 <div class=\"banner__wrapper wrapper\">\n	 	<div class=\"banner__title\">\n	 		<h1 class=\"--rubrica-title\"><span class=\"--italic\">ПЛЕВАТЬ<br/>НА ЛОГИКУ</span><br/>ШЕДЕВР<br/>СОЗДАЮТ<br/>ЭМОЦИИ <span class=\"switcher\"><img src=\"assets/img/switcher.png\" alt=\"switcher\"></span></h1>\n	 		<h4 class=\"--avente-subtitle-big\">А ЭМОЦИИ СОЗДАЕМ <a href=\"#summary\" class=\"--primary-color\">МЫ</a></h4>\n	 	</div>\n	 	<div class=\"banner__head\">\n	 		<div class=\"canvas-bg\">\n	 			<canvas height=\"810px\" id=\"canvas\"></canvas>\n	 		</div>\n	 		<div class=\"head-img\"></div>\n	 	</div>\n	 </div>\n	 <div class=\"banner__mob-content wrapper banner__toform-btn\">\n	 	<div class=\"toform-btn__btn\"><a href=\"#forms-block\">хочу шедевр</a></div>\n	 	<p class=\"banner__mob-text\">Когда-то давно Микеланджело\n			<br/>вооружился инструментами\n			<br/>и создал из глыбы мрамора \n			<br/>произведение искусства — «Давида». \n			<br/>Скульптор даже пренебрег логикой и \n			<br/>исказил пропорции человеческого тела,\n			<br/>чтобы достичь большей художественной\n			<br/>выразительности.</p>\n	 </div>\n</section>";
},"usePartial":true,"useData":true}); });
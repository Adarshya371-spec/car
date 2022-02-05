class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Enter your name");
    this.playButton = createButton("Play");
    this.titleImg = createImg("assets/title.png", "game title");
    this.greeting = createElement("h2");
    this.question=createElement("h3")
  }

  setElementsPosition() {
    this.titleImg.position(120, 50);
    this.input.position(width / 2 - 110, height / 2 - 80);
    this.playButton.position(width / 2 - 90, height / 2 - 20);
    this.greeting.position(width / 2 - 300, height / 2 - 100);
    this.question.position(width/2-400,height/2-100)
  }

  setElementsStyle() {
    this.titleImg.class("gameTitle");
    this.input.class("customInput");
    this.playButton.class("customButton");
    this.greeting.class("greeting");
    this.question.class("question")
  }

  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
   // this.question.hide();
  }

  handleMousePressed() {
    this.playButton.mousePressed(() => {
      this.input.hide();
      this.playButton.hide();
      var message = `
      Hello ${this.input.value()}
      </br>wait for another player to join...`;
      this.greeting.html(message);
      playerCount += 1;
      player.name = this.input.value();
      player.index = playerCount;
      player.addPlayer();
      player.updateCount(playerCount);
    });
  }

  display() {
    this.setElementsPosition();
    this.setElementsStyle();
    this.handleMousePressed();
    this.question.html("Question:- What starts and ends with the letter ‘E’, but has only one letter? " );
    this.question.position(490, 80);

    this.access1 = createInput("Type your answer")
    this.access1.position(640, 680);
    this.access1.style('background', 'white'); 
    this.access1.size(100, 50)

    this.access2=createButton("submit")
    this.access2.position(900,700)
    
    
  }
}

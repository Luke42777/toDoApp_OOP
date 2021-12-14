class Search {
    constructor(inputChunk = "",liWords,ul) {
        this.liWords = [...liWords];
        this.ul = ul;
        this.input = new Input(inputChunk);
    }
    filterWords() {
        this.input.toLower();
       
        let filteredWords = this.liWords;
        filteredWords = filteredWords.filter(word => word.textContent.toLowerCase().includes(this.input.getInputValue()));
        this.ul.textContent = "";
        filteredWords.forEach(word => {this.ul.appendChild(word);});
    }

    };


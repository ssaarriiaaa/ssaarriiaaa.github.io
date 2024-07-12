document.addEventListener("DOMContentLoaded", function() {
    const inputField = document.getElementById("input");
    const messagesContainer = document.getElementById("messages");
    const imgReplace = document.getElementById("duckIMG");
    
    inputField.addEventListener("keydown", function(e) {
        if (e.code === "Enter") {
            let input = inputField.value;
            if (input.trim() !== "") {
                inputField.value = "";
                output("You: " + input);
            }
        }
    });

    function addChatEntry(input, product) {
        let userDiv = document.createElement("div");
        userDiv.className = "user response";
        userDiv.innerHTML = input;
        messagesContainer.insertBefore(userDiv, document.getElementById("inputCover"));

        let duckDiv = document.createElement("div");
        let duckText = document.createElement("span");
        duckDiv.className = "duck response";
        duckText.innerText = "Duck: ...";
        duckDiv.appendChild(duckText);
        messagesContainer.insertBefore(duckDiv, document.getElementById("inputCover"));
        
        messagesContainer.scrollTop = messagesContainer.scrollHeight;

        setTimeout(() => {
            duckText.innerText = product;
            imgReplace.src = duckGIFS[Math.floor(Math.random() * duckGIFS.length)];
        }, 500);
    }

    function output(input) {
        let product = "Duck: " + responses[Math.floor(Math.random() * responses.length)];
        addChatEntry(input, product);
    }

    const responses = [
        "quack!",
        "quack quack!!",
        "quack.",
        "QUACK",
        "QUACKKKKK",
        "quack!!!!!!!!",
        "quack quack quack.",
        "quack, quack quack quack quack? quack quack! quack! quack.",
        "quack. quack? QUACK!",
        "qqqqquuuuuaaaaaccckkkkkkk....",
        ".............quack!",
        "quackkkkkkkkkkkkkkkk...",
        "𓅭𓅭𓅭𓅭𓅭𓅭𓅭",
        "qua-",
        "quack?",
        "meow.",
        "quackity quack quack",
        "*looks at you judgingly*",
        "HONK"
    ];
    
    const duckGIFS = [
        "angry_duck.gif",
        "disgusted_duck.gif",
        "happy_duck.gif",
        "sad_duck.gif"
    ];
});

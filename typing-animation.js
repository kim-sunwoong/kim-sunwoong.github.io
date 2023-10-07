const text = `My name is Sunwoong Kim, and I'm set to graduate with a Bachelor's degree in Management Information Systems
from Penn State in the spring of 2024. My passion lies in the realms of data, systems, and cloud technology.
My long-term goal is to create an offline-based platform service and B2B software business, leveraging location
and popularity rankings as key factors in achieving success.`;

const typingTextElement = document.getElementById('typing-text');

function typeText(text, element, delay = 50) {
    let i = 0;
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, delay);
        }
    }
    type();
}

typeText(text, typingTextElement);

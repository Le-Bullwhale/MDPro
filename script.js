const toolbarButtons = document.querySelectorAll('.toolbar-btn');

function toggleFormatting(buttonId) {
    const textarea = document.getElementById("content");
    const button = document.getElementById(buttonId);

    button.classList.toggle('selected');
    textarea.focus();

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = textarea.value.substring(start, end);

    let formattedText;
    switch (buttonId) {
        case "bold":
            formattedText = `**${selectedText}**`;
            break;
        case "italic":
            formattedText = `*${selectedText}*`;
            break;
        case "header":
            formattedText = `# ${selectedText}`;
            break;
        case "code":
            formattedText = `\`${selectedText}\``;
            break;
        case "quote":
            formattedText = `> ${selectedText}`;
            break;
        case "hyperlink":
            const link = prompt("Enter the link:");
            if (link) {
                formattedText = `[${selectedText}](${link})`;
            }
            break;
        default:
            formattedText = selectedText;
    }

    if (formattedText) {
        const newText = `${textarea.value.substring(0, start)}${formattedText}${textarea.value.substring(end)}`;
        textarea.value = newText;
    }
}

const previewButton = document.getElementById('preview');
const previewContainer = document.getElementById('preview-container');

previewButton.addEventListener('click', function () {
    const content = document.getElementById('content').value;
    const html = marked(content);
    previewContainer.innerHTML = html;
});

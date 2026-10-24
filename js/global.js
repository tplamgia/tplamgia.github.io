document.querySelectorAll("button[data-copy]").forEach(button => {
    const originalText = button.textContent;

    button.addEventListener("click", async () => {
        try {
            await navigator.clipboard.writeText(button.dataset.copy);
            button.textContent = "Đã copy!";
        } catch (error) {
            button.textContent = "Copy thất bại!";
        }

        setTimeout(() => {
            button.textContent = originalText;
        }, 1000);
    });
});
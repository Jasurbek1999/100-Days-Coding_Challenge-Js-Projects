(function() {
    const form = document.querySelector(".message-form")

    form.addEventListener('submit', function(e){
        e.preventDefault()

        const message = document.querySelector("#message")
        const feedback = document.querySelector(".feedback")
        const messageContent = document.querySelector(".message-content")

        if (message === ''){
            feedback.classList.add('show')
            setTimeout(function(){
                feedback.classList.remove('show')
            }, 2000)
        } else {
            messageContent.textContent = message.value 
            message.value = ''
        }
    })
})
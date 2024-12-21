$(function() {
    let allNumbers = [],
        allSelectedNumbers = [];

    for (let count = 1; count < 91; count++) {
        $('#tabella').append(`<span>${count}</span>`);
        allNumbers.push(count);
    }

    const autorun = () => {
        setInterval(function() {
            $('.estrai-numero').click();
        }, 10000); // Draw every 10 seconds
    };

    $('.autorun').click(function() {
        autorun();
    });

    $('.estrai-numero').click(function() {
        if (allNumbers.length === 0) {
            $(".estrai-numero").prop('disabled', true); 
            return;
        }

        let selectedNumber = allNumbers[Math.floor(Math.random() * allNumbers.length)];
        $('.extracted-number').text(selectedNumber);

        let removeIndex = allNumbers.indexOf(selectedNumber);
        allNumbers.splice(removeIndex, 1);
        allSelectedNumbers.push(selectedNumber);

        $('span').each(function() {
            let check = allSelectedNumbers.includes(parseInt($(this).text()));
            (check) ? $(this).addClass('found') : false;
        });

	const utterance = new SpeechSynthesisUtterance(selectedNumber);
        const voices = speechSynthesis.getVoices();
        utterance.voice = voices[1];
        utterance.rate = 0.9
        console.log(voices);
        speechSynthesis.speak(utterance);

    });

    $('.reset').click(function() {
        location.reload();
    });

    $('.ambo').click(function(){
        $('.ambo').addClass("active");
    });

    $('.cinquina').click(function(){
        $('.ambo').addClass("founded"); // Use jQuery to select the elements
        $('.cinquina').addClass("active");
    });

    $('.decina').click(function(){
	$('.cinquina').addClass("founded");
	$('.decina').addClass("active");
    });

    $('.tombola').click(function(){
        $('.decina').addClass("founded"); // Use jQuery to select the elements
        $('.tombola').addClass("active");
    });
});

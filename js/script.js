'use strict';

const formNum = document.querySelector('#num'),
      formNumTwo = document.querySelector('#num__two'),
      plus = document.querySelector('.plus'),
      minus = document.querySelector('.minus'),
      multi = document.querySelector('.multiplate'),
      divide = document.querySelector('.divide'),
      statusBlock = document.createElement('img'),
      sum = document.querySelector('#sum');
      
      const message = {
        loading: 'img/spinner.svg',
        done: 'img/succuses.png',
        bad: 'img/error.png'
    };
      
      fetch('http://localhost/IT%20projects/calculator/js/serverscript.php', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        }
      })
        .then(() => {
                statusBlock.src = message.loading;
                statusBlock.style.cssText = 'display: block; margin: 0 auto; height: 30px; width: 30px;';
                formNum.parentElement.append(statusBlock);

                plus.addEventListener('click', () => {
                    const resultPlus = parseInt(formNum.value) + parseInt(formNumTwo.value);
                    sum.value = resultPlus;
                });

                minus.addEventListener('click', () => {
                    const resultMinus = parseInt(formNum.value) - parseInt(formNumTwo.value);
                    sum.value = resultMinus;
                });

                multi.addEventListener('click', () => {
                    const resultMulti = parseInt(formNum.value) * parseInt(formNumTwo.value);
                    sum.value = resultMulti;
                })
            
                divide.addEventListener('click', () => {
                    const resultDivide = (parseInt(formNum.value) / parseInt(formNumTwo.value)).toFixed(2);
                    sum.value = resultDivide;
                });

            statusBlock.src = message.done;
        }).then(() => {
            setTimeout(() => {
                statusBlock.remove();
            }, 5000);
        }).catch(() => {
            statusBlock.src = message.bad;
        });



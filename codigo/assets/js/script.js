
setInterval(function (){
    //coloque aqui suas funções
}, 10000);

var isMenuHidden = 0;

//tasklist
window.tasklistCounter = 0;
var clickedInputId = 1;
var clickedTasklistId = window.tasklists;
var dayJSONadress;
var thisDayJSONadress;
var currentTLcounter;
var isTLorPTopen = 0;

var segTLcounter = 0, terTLcounter = 0, quaTLcounter = 0, quiTLcounter = 0, sexTLcounter = 0, sabTLcounter = 0, domTLcounter = 0;

var seg = [];
var ter = [];
var qua = [];
var qui = [];
var sex = [];
var sab = [];
var dom = [];

var tasklists = [
    seg,
    ter,
    qua,
    qui,
    sex,
    sab,
    dom,
];

function getTasklistId (id) {
    clickedTasklistId = id;
}

function getClickedInputId (id) {
    clickedInputId = id;
}

function getThisJSONadress (dayJSONadress){
    thisDayJSONadress = dayJSONadress;
}


function createTask (dayJSONadress,thisDayJSONadress,clickedInputId,currentTLcounter,savedTaskId) {
    let div = document.querySelector('#task-creator-wrapper');
    
    tasklists[dayJSONadress][currentTLcounter - 1].taskQuantity += 1;

    $('#task-creator-wrapper').css({
        opacity: '1',
    });
    $('#tasklist-view').css({
        pointerEvents: 'none',
        opacity: '0.5',
    });
    $('.módulo').css({
        pointerEvents: 'none',
    });

    div.innerHTML = `
    <div id="task-creator">
        <div id="task-creator-header">
            <h2>Criar tarefa</h2>
            <div id="task-creator-header-buttons">
                <div id="task-creator-header-approve"><img src="./assets/img/mais amarelo.png" alt="Salvar Task"></div>
                <div id="task-creator-header-reject"><img src="./assets/img/cruz amarelo.png" alt="Cancelar task"></div>
            </div>
        </div>
        <div id="task-creator-content">
            <h4>Título da tarefa</h4>
            <input type="text" placeholder="Título" id="task-creator-input-title" class="tcit1">
            <h4>Valor da tarefa (0 a 5 pontos)</h4>
            <input type="text" placeholder="Valor" id="task-creator-input-title" class="tcit2">
        </div>
        <div id="task-creator-footer">
            <h3>----------------------------------</h3>
            <div id="task-creator-info">
                <p><strong>id:</strong> `+tasklists[dayJSONadress][currentTLcounter - 1].taskQuantity+` <strong>tasklist:</strong> `+tasklists[thisDayJSONadress][clickedInputId - 1].title+`</p>
            </div>
        </div>
    </div>
    `;

    $('#task-creator-header-reject').on('click', function () {
        $('#task-creator-wrapper').css({
            opacity: '0',
        });
        $('#tasklist-view').css({
            pointerEvents: 'auto',
            opacity: '1',
        });
        $('.módulo').css({
            pointerEvents: 'auto',
        });
        div.innerHTML = ``;
        tasklists[dayJSONadress][currentTLcounter - 1].taskQuantity -= 1;
    })
    $('#task-creator-header-approve').on('click', function () {
        let input1 = document.querySelector('.tcit1');
        let input2 = document.querySelector('.tcit2');
        
        if (input1.value != undefined && input2.value != undefined && input2.value > 0 && input2.value < 6){
            tasklists[clickedTasklistId][clickedInputId - 1].tasks[savedTaskId] = {
                name: input1.value, complete: 0, value: input2.value, taskId: savedTaskId + 1,
            };
            $('#task-creator-wrapper').css({
                opacity: '0',
            });
            $('#tasklist-view').css({
                pointerEvents: 'auto',
                opacity: '1',
            });
            $('.módulo').css({
                pointerEvents: 'auto',
            });
            setTimeout(function(){
                div.innerHTML = ``;
            },300);
            displayTasklist(dayJSONadress,clickedInputId,currentTLcounter,savedTaskId);
            window.taskCounter++;
        } else {
            console.log('campos de preenchimento inválidos');
        }
    })
}

function newTasklist(dayPosition,) {

    let div = document.getElementById(dayPosition);
    let taskspaceName;

    if (div === document.getElementById('t1')){
        dayJSONadress = 0;
        taskspaceName = "seg";
        segTLcounter++;
        currentTLcounter = segTLcounter;
    } else if (div === document.getElementById('t2')) {
        dayJSONadress = 1;
        taskspaceName = "ter";
        terTLcounter++;
        currentTLcounter = terTLcounter;
    } else if (div === document.getElementById('t3')) {
        dayJSONadress = 2;
        taskspaceName = "qua";
        quaTLcounter++;
        currentTLcounter = quaTLcounter;
    } else if (div === document.getElementById('t4')) {
        dayJSONadress = 3;
        taskspaceName = "qui";
        quiTLcounter++;
        currentTLcounter = quiTLcounter;
    } else if (div === document.getElementById('t5')) {
        dayJSONadress = 4;
        taskspaceName = "sex";
        sexTLcounter++;
        currentTLcounter = sexTLcounter;
    } else if (div === document.getElementById('t6')) {
        dayJSONadress = 5;
        taskspaceName = "sab";
        sabTLcounter++;
        currentTLcounter = sabTLcounter;
    } else if (div === document.getElementById('t7')) {
        dayJSONadress = 6;
        taskspaceName = "dom";
        domTLcounter++;
        currentTLcounter = domTLcounter;
    } else {
        console.log("taskspace não identificado!");
        return 0;
    }
    
    thisDayJSONadress = dayJSONadress;

    if (tasklists[dayJSONadress].length == 0) {
        div.innerHTML = ``;
    }


    window.tasklistCounter++;
    clickedInputId = window.tasklistCounter;

    tasklists[dayJSONadress][currentTLcounter - 1] = {
        id: currentTLcounter,
        title: "Título",
        taskspace: taskspaceName,
        taskQuantity: 0,
        tasks: [],
    };
    

    let currentId = window.tasklistCounter;

    div.insertAdjacentHTML('beforeend',`
    <div class="tasklist" id="TL` + currentId + `" onclick="getThisJSONadress(`+dayJSONadress+`)">
        <input type=""text" class="tasklist-title" id="TLT`+ currentId + `" placeholder="` + tasklists[thisDayJSONadress][currentTLcounter - 1].title + `" onFocus="this.select()" onclick="getClickedInputId(`+ currentTLcounter + `); getTasklistId(`+dayJSONadress+`)" data-day="`+dayJSONadress+`" data-ident="`+currentId+`">
        <p class="tasklist-percentage">0%</p>
    </div> 
    `);
    
    let input = document.getElementById(`TLT`+ clickedInputId);
    input.addEventListener('keydown', function (e) {
        if (e.keyCode === 13) {
            let dayJSONadress = input.getAttribute('data-day');
            tasklists[dayJSONadress][clickedInputId - 1].title = input.value;
            displayTasklist(dayJSONadress,clickedInputId,currentTLcounter);
        };
        
    });

    $('.tasklist').on('click', function (){
        displayTasklist(dayJSONadress,clickedInputId,currentTLcounter);
    });

    setTimeout(function () {
        $('.tasklist').css({
            opacity: '1',
        });
    }, 1);
}

let body = document.querySelector('body');
body.addEventListener('keydown', function (e) {
    if (e.keyCode === 80) {
        console.log(tasklists);
    };
    
});

function deletetask(clickedTasklistId, dayJSONadress, clickedInputId, currentTLcounter, i) {
    window.taskCounter--;
    let array = tasklists[clickedTasklistId][clickedInputId - 1].tasks;
    let index = i;
    if (index === 0) {
        array.shift();  // Remove the first element
    } else {
    for (let i = index; i < array.length - 1; i++) {
      array[i] = array[i + 1];  // Shift elements to the left
    }
    array.pop();  // Remove the last element
    } 
    displayTasklist(dayJSONadress,clickedInputId,currentTLcounter);
}

function addTaskEvents (id, clickedTasklistId, dayJSONadress, clickedInputId, currentTLcounter, clickedTaskId, i) {
    $(`#${id}`).hover(function(){
        $(`#dTask${id}`).css({
            opacity: '1',
        });
    },function(){
        $(`#dTask${id}`).css({
            opacity: '0',
        });
    });
    $(`#dTask${id}`).on('click', function () {
        deletetask(clickedTasklistId, dayJSONadress, clickedInputId, currentTLcounter, i);
    });
}

var clickedTaskId;
function getTaskId(id){
    clickedTaskId = id;
    console.log(id);
}

function displayTasklist (dayJSONadress,clickedInputId,currentTLcounter,savedTaskId) {

    let div = document.querySelector('#tasklist-view-wrapper');
    let div2 = document.querySelector('#postit-view-wrapper');
    let taskQuantity = tasklists[thisDayJSONadress][clickedInputId - 1].taskQuantity;

    //if (isTLorPTopen === 1) {
        
    //}

    div.innerHTML = ``;
    div2.innerHTML = ``;
    $('#tasklist-view-wrapper').css({
        left: '100%',
    })

    isTLorPTopen = 1;

    setTimeout(function (){
        div.insertAdjacentHTML('afterbegin', `
        <div id="tasklist-view">
            <h1 id="tasklist-view-title">`+tasklists[thisDayJSONadress][clickedInputId - 1].title+`</h1>
            <div id="tasklist-view-content" class="TVC`+clickedInputId+`">
            </div>
            <div id="tasklist-view-footer">
                <div id="footer-content">
                    <div id="footer-content-left">
                        <h5><strong>Info</strong></h5>
                        <div id="info-TL-id"><strong>ID:</strong> `+clickedInputId+`</div>
                        <div id="info-TL-Taskspace"><strong>Taskspace:</strong> `+tasklists[thisDayJSONadress][clickedInputId - 1].taskspace+`</div>
                        <div id="info-TL-Task-counter"><strong>Quantidade de tasks:</strong> `+taskQuantity+`</div>
                    </div>
                    <div id="footer-content-right">
                        <div id="newTLbutton">
                            <img src="./assets/img/mais amarelo.png" alt="Nova Tarefa">
                            <h3>Nova tarefa</h3>
                        </div>
                        <div id="exitTLbutton">
                            <img src="./assets/img/saida amarelo.png" alt="Fechar Tasklist">
                            <h3>Fechar</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `);

    let tasklistViewContent = document.querySelector('.TVC'+clickedInputId+'');

    var savedTaskId = tasklists[thisDayJSONadress][clickedInputId - 1].tasks.length;
    let taskHTMLid;

    for (i = 0; i < tasklists[thisDayJSONadress][clickedInputId - 1].tasks.length; i++) {
        taskHTMLid = taskHTMLid = clickedTasklistId+`-`+(clickedInputId - 1)+`-`+i;
        tasklistViewContent.insertAdjacentHTML('beforeend', `
        <div class="task" id="${taskHTMLid}">
            <input type="checkbox" class="checkbox" id="CB">
            <input type="text" placeholder="Tarefa" class="task-title" id="task-title`+(i + 1)+`">
            <div class="deleteTask" id="deleteTask${taskHTMLid}">
                <img src="./assets/img/cruz-pequeno.png" alt="Excluir Tarefa" id="dTask${taskHTMLid}">
            </div>
        </div>
        `); 
        var taskTitleId = document.getElementById(`task-title${i + 1}`);
        taskTitleId.setAttribute('value', tasklists[clickedTasklistId][clickedInputId - 1].tasks[i].name);
        addTaskEvents(taskHTMLid, clickedTasklistId, dayJSONadress, clickedInputId, currentTLcounter, savedTaskId, i);
    };
    
    
    


    

    $('#newTLbutton').on('click', function (){
        createTask(dayJSONadress,thisDayJSONadress,clickedInputId,currentTLcounter,savedTaskId);
    });
    $('#exitTLbutton').on('click', function (){
        $('#tasklist-view-wrapper').css({
            left: '100%',
        });
        setTimeout(function(){
            div.innerHTML = '';
        },500);
    });
    $('#tasklist-view-wrapper').css({
        left: '70%',
    })
    }, 200);
}

//post-its



function displayPostit () {
    console.log('detectado!');
    isTLorPTopen = 1;

    let div = document.querySelector('#postit-view-wrapper');
    let div2 = document.querySelector('#tasklist-view-wrapper');

    div.innerHTML = ``;
    div2.innerHTML = ``;
    $('#postit-view-wrapper').css({
        left: '100%',
    })

    isTLorPTopen = 1;

    setTimeout(function (){
        div.insertAdjacentHTML('afterbegin', `
        <div id="postit-view">
            <h1 id="postit-view-title">Post-it`+/*add titulo com input*/`</h1>
            <div id="postit-view-content" class="PVC1"> `+/*atribuir id procedural*/`
                <div id="PT-text">
                    <h5 id="PT-textTitle"><strong>Texto:</strong></h5>
                    <div id="PT-text-content">"insira texto aqui"</div>
                </div>
                <div id="PT-task">
                    <h5 id="PT-taskTitle"><strong>Tasks:</strong></h5>
                    <div id="PT-task-content">"tasks estarão aqui. Essas tasks não contam pro sistema de pontuação de produtividade"</div>
                </div>
            </div>
            <div id="postit-view-footer">
                <div class="postitBTN" id="exitPT">
                    <img src="/codigo/assets/img/saida-laranja.png" alt="Sair">
                    <h3>Sair</h3>
                </div>
                <div class="postitBTN" id="newPT-task">
                    <img src="/codigo/assets/img/mais-laranja.png" alt="Nova Task">
                    <h3>Nova<br>task</h3>
                </div>
            </div>
        </div>
    `);

    $('#exitPT').click(function(){
        $('#postit-view-wrapper').css({
            left: '100%',
        });
    });
    $('#postit-view-wrapper').css({
        left: '70%',
    });
    }, 200);
}





// config-page
function showConfigPage() {
    var loaded = 0;
    window.varIsConfigPageOn = 1;
    const pageStart = document.querySelector('#config-page-wrapper');

    setTimeout(function () {
        $('#config-page').css({
            opacity: '1',
        });
    }, 1);

    pageStart.innerHTML += `
    <div id="config-page">
        <section id="config-page-content"><section>
    </div>`;

    const configPageContent = document.querySelector('#config-page-content');
    configPageContent.innerHTML += `
    <header>
        <div class="op50animation "id="config-page-leave">
            <img id="a" src="./assets/img/cruz.png" alt="Sair">
        </div>
        <p>OLÁ USUÁRIO</p>
        
    </header>

    <div id="config-itens-wrapper">
        <ul>
            <li class="config-item op50animation" id="tema">
                <h3>Tema</h3>
                <div class="config-item-content">
                    <p>Escolha entre tema claro e escuro</p>
                    <input type="checkbox" onclick="javascript:executarAcoes()" name="change-theme" id="change-theme">
                <label for="change-theme">
                    <i class="bi bi-sun"></i>
                    <i class="bi bi-moon"></i>
                </label>
                </div>
            </li>
            <li class="config-item op50animation" id="background">
                <h3>Background</h3>
                <div class="config-item-content">
                    <p>Defina o background como cor, gradiente ou imagem</p>
                    <div id="imgSelect-wrapper">
                        <div class="imgSelect" id="img1">
                            <img src="./assets/img/pool-nature-landscape-palm-ocean.jpg" alt="background 1" class="bgOption">
                        </div>
                        <div class="imgSelect" id="img2">
                            <img src="./assets/img/large-cliff-pfeiffer-beach-usa-during-sunset.jpg" alt="background 2" class="bgOption">
                        </div>
                        <div class="imgSelect" id="img3">
                            <img src="./assets/img/beautiful-view-tropical-sandy-beach-with-palm-trees.jpg" alt="background 3" class="bgOption">
                        </div>
                        <div class="imgSelect" id="img4">
                            <p>Cor padrão</p>
                        </div>
                    </div>
                </div>
            </li>
            <li class="config-item op50animation">a</li>
            <li class="config-item op50animation">a</li>
            <li class="config-item op50animation">a</li>
            <li class="config-item op50animation">a</li>
        </ul>
    </div>
    `;

    $('#tema').hover(function () {
        $('#tema .config-item-content').css({
            opacity: '1',
        });

    }, function () {
        $('#tema .config-item-content').css({
            opacity: '0',
        });
    });
    $('#background').hover(function () {
        $('#background .config-item-content').css({
            opacity: '1',
        });

    }, function () {
        $('#background .config-item-content').css({
            opacity: '0',
        });
    });

    setTimeout(function () {
        $('#config-page-content').css({
            opacity: '1',
        });
        $('#config-page-leave').on('click', function () {
            hideConfigPage();
            loaded = 0;
        });
    }, 1000);

    $("#img1").click(function(){
        $('.imgSelect').css({
            backgroundColor: 'transparent',
        });
        $(this).css({
            backgroundColor: 'var(--cor-3)',
        });
        $('#body').css({
            backgroundImage: 'url(/codigo/assets/img/pool-nature-landscape-palm-ocean.jpg)',
        })
    });
    $("#img2").click(function(){
        $('.imgSelect').css({
            backgroundColor: 'transparent',
        });
        $(this).css({
            backgroundColor: 'var(--cor-3)',
        });
        $('#body').css({
            backgroundImage: 'url(/codigo/assets/img/large-cliff-pfeiffer-beach-usa-during-sunset.jpg)',
        })
    });
    $("#img3").click(function(){
        $('.imgSelect').css({
            backgroundColor: 'transparent',
        });
        $(this).css({
            backgroundColor: 'var(--cor-3)',
        });
        $('#body').css({
            backgroundImage: 'url(/codigo/assets/img/beautiful-view-tropical-sandy-beach-with-palm-trees.jpg)',
        })
    });
    $("#img4").click(function(){
        $('.imgSelect').css({
            backgroundColor: 'transparent',
        });
        $(this).css({
            backgroundColor: 'var(--cor-3)',
        });
        $('#body').css({
            backgroundImage: 'none',
        })
    });

};

function hideConfigPage() {


    const pageEnd = document.querySelector('#config-page-wrapper');

    $('#config-page-content').css({
        opacity: '0',
    });

    setTimeout(function () {
        $('#config-page').css({
            opacity: '0',
        });
        setTimeout(function () {
            pageEnd.innerHTML = ``;
        }, 500);
        window.varIsConfigPageOn = 0;
    }, 1000);
}


// login page
function showLoginPage() {
    window.isLoginPageOn = 1;
    $('#login-page-outer-wrapper').css({
        display: 'block',
    });
    let div = document.querySelector('#login-page-outer-wrapper');

    div.innerHTML += `
    <div id="login-page-inner-wrapper">
        <div id="login-form">
            <h1 id="login-title">INSCREVA-SE</h1>
            <div id="loguin-form-content">
            <h6 id="input-title">Nome do usuário:</h6>
                <input type="text" placeholder="NickName">
                <h6 id="input-title">Usuário:</h6>
                <input type="text" placeholder="Email">
                <h6 id="input-title">Senha:</h6>
                <input type="text" placeholder="*********">
                <h6 id="input-title">Confirmar senha:</h6>
                <input type="text" placeholder="*********">
            </div>
            <p id="login-signup-button">Já tem uma conta? Entrar</p>
            <div id="save-button">
                <h4 style="margin: 0;">REGISTRAR</h4>
            </div>
        </div>
    </div>`;

    $('#login-signup-button').on('click', slideToLogin);
    $('#save-button').on('click', hideLoginPage);
}
function slideToLogin() {
    $('#login-page-inner-wrapper').css({
        left: "50%",
    });
    $('#login-form').css({
        opacity: '0',
    });
    let div = document.querySelector('#login-form');
    setTimeout(function () {
        div.innerHTML = `
        <h1 id="login-title">Seja bem vindo!</h1>
        <div id="loguin-form-content">
            <h6 id="input-title">Usuário:</h6>
            <input type="text" placeholder="Email">
            <h6 id="input-title">Senha:</h6>
            <input type="text" placeholder="*********">
        </div>
        <p id="login-signup-button">Não tem uma conta? Registrar</p>
        <div id="save-button">
            <h4 style="margin: 0;">ENTRAR</h4>
        </div>`;
        setTimeout(function () {
            $('#login-form').css({
                opacity: '1',
            });
        }, 600);
        $('#login-signup-button').on('click', slideToSignUp);
        $('#save-button').on('click', hideLoginPage);
    }, 200);

}
function slideToSignUp() {
    $('#login-page-inner-wrapper').css({
        left: "-50px",
    });
    $('#login-form').css({
        opacity: '0',
    });
    let div = document.querySelector('#login-form');
    setTimeout(function () {
        div.innerHTML = `
        <h1 id="login-title">INSCREVA-SE</h1>
        <div id="loguin-form-content">
            <h6 id="input-title">Usuário:</h6>
            <input type="text" placeholder="Email">
            <h6 id="input-title">Senha:</h6>
            <input type="text" placeholder="*********">
            <h6 id="input-title">Confirmar senha:</h6>
            <input type="text" placeholder="*********">
        </div>
        <p id="login-signup-button">Já tem uma conta? Entrar</p>
        <div id="save-button">
            <h4 style="margin: 0;">REGISTRAR</h4>
        </div>`;
        setTimeout(function () {
            $('#login-form').css({
                opacity: '1',
            });
            $('#login-signup-button').on('click', slideToLogin);
            $('#save-button').on('click', hideLoginPage);
        }, 600);
    }, 200);
}
function hideLoginPage() {
    let div = document.querySelector('#login-page-outer-wrapper');
    $('#login-page-outer-wrapper').css({
        display: 'none',
    });
    div.innerHTML = ``;
    window.isLoginPageOn = 0;
}


//CODIGO TEXTO Q DIGITA SOZINHO

/*const el = document.querySelector('#text');
const text = "1 melhor cada dia!";
const interval = 200;

function showText(el,text,interval){
    const char = text.split("").reverse();
    const typer = setInterval(() => {

        if(!char.length){
            return clearInterval(typer);
        }
        const next = char.pop();

        el.innerHTML += next;

    },interval);
}

showText(el,text,interval);
*/




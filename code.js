class ItemDeal{
    constructor(content, color){
        this.content = content
        this.color = color
        this.now = new Date
    }
}

let motivation_array = [
    'Цитаты придумаю',
    'В другой раз',
    'Слава прокрастинации',
    'Аминь'
]
let IA = [
    'has-text-danger',
    'has-text-warning',
    'has-text-success'
]
let animation_array = [
    'bounce',
    'rollOut',
    'rotateOut',
    'lightSpeedOut'
]
let month_array = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']


let select = document.querySelector('select')
let field = document.querySelector('input')
let button = document.querySelector('.button_plus')
let deals = document.querySelector('.deals')

// Изменение цвета фона при каждой загрузке страницы

let bg_color_array = ['has-background-dark', 'has-background-white', 'has-background-link']

document.addEventListener('DOMContentLoaded', function() {
    let page_style = document.querySelector('.page_style')
    GR(bg_color_array)
    let bg_color = GR(bg_color_array)
    console.log(bg_color)
    page_style.classList.add(bg_color_array[bg_color])
    if(bg_color == 1){
        document.querySelector('.todo h1').classList.remove('has-text-white')
        document.querySelector('.todo h1').classList.add('has-text-black')
    }
})

// Функция создания дела
function addDeal(){
    let content = field.value
    if(!content){
        return
    }
    let item = new ItemDeal(content, select.value-1)
    let item_to_JSON = JSON.stringify(item)
    localStorage.setItem(+item.now, item_to_JSON)
    GenerateDOM(item)
    field.value = ''
    // console.table(item)
    // console.log(Date.parse(item.now))
}

button.addEventListener('click', addDeal)

document.addEventListener('keypress', (e) =>{
    if(e.code == 'Enter'){
        // button.click()
        addDeal()
    }
})

function GenerateDOM(obj){
    deals.insertAdjacentHTML('afterbegin', `<div class="wrap_task animated zoomInLeft"
    id="${+obj.now}">
    <div class="task is-size-4">
        <p> <span class="${IA[obj.color]}"> ${obj.content}</span>
        ${obj.now.getDate()} ${month_array[obj.now.getMonth()]}
        </p>
    </div>
    <span class="icon is-large tr">
        <i class="fa fa-trash thrash"></i>
    </span>
    </div>
    `)
}

function GR(arr){
    return Math.round(Math.random() * (arr.length-1))
}

// Самовызывающаяся функция
// При запуске приложения она отрисовывает все дела
// из localStorage 
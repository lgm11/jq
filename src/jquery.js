window.jQuery = function(selectorOrArray){
    let elements
    if (typeof selectorOrArray === 'string') {
        elements = document.querySelectorAll(selectorOrArray)
    }else if (selectorOrArray instanceof Array) {
        elements = selectorOrArray
    } 
    return{
        addClass(className){
            for(let i = 0;i < elements.length;i++){
                elements[i].classList.add(className)
            }
            return this
        },
        find(selector){
            let array = []
            for(let i = 0;i < elements.length;i++){
                const elements2 = Array.from(elements[i].querySelectorAll(selector))
                array = array.concat(elements2)
            }
            return jQuery(array)
        },
        each(fn){
            for(let i = 0;i < elements.length;i++){
                fn.call(null,elements[i],i)
            }return this
        },
        parent(){
            const array = []
            this.each((node) => {
                if(array.indexOf(node.parent) === -1){//因为有可能有多个同名字的节点，他们都同属一个爸爸。这代码是判断这个爸爸存不存在，不存在就push，在就不push
                    array.push(node.parentNode)}   
                })
            return jQuery(array)
        },
        print(){
            console.log(elements);
        },
        children(){
            const array = []
            this.each ((node) => {
                array.push(...node.children)
            })
            return jQuery(array)
        }
    }
}
window.$ = window.jQuery
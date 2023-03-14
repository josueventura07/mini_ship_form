import {listComp, listHorno, listReactive, UM, listBathroom, listOffice} from './data.js'


const containerSelectByDescrip = document.querySelector('.input_descript')
const containerSelectByUM = document.querySelector('.input_um')
const containerSelectByType = document.querySelector('.input_type')
const form = document.querySelector('.formulario')



containerSelectByType.addEventListener('change', (e) => {
    
   let value = e.currentTarget.value
    
    if(value == 'COMPONENTES') {
        descriptions(listComp)
    } else if(value === 'HORNO') {
        descriptions(listHorno)
    } else if(value === 'REACTIVO') {
        descriptions(listReactive)
    } else if(value === 'INSUMOS PARA BAÑOS') {
        descriptions(listBathroom)
    } else if(value === 'MATERIALES PARA OFICINA') {
        descriptions(listOffice)
    }    
    
})

function UnitOfMeasure(um) {
    let html = '<option value="">Selec una Unidad de Medida</option>';
                   
    um.map(element => {
        
       html += `
                <option value="${element}">${element}</option>
                
                `
              return containerSelectByUM.innerHTML = html; 
        })          
    };

function descriptions(description) {
    
    let html = '<option value="">Seleccione Producto</option>';
    
        description.map(element => {
            
           html += `
                    <option value="${element}">${element}</option>
                   `
                  return containerSelectByDescrip.innerHTML = html; 
            })          
    };

UnitOfMeasure(UM)    
  

console.log(containerSelectByType.tar)
function one(){
    let res=''

    for(let j=1; j<8; j++){    
        for(let i=1; i<8;i++){
            res+='*'
        }
           res+='\n'
    }

    return res
}

console.log('one:'+'\n'+one())

function two(){
    let res=''

    for(let j=1; j<8; j++){    
        for(let i=1; i<8;i++){
            if(j==1 || j==7){
                res+='*'
            }
            else{
                if(i==1 || i==7){
                    res+='*'
                }
                else res+=' '
            }
        }
           res+='\n'
    }
    
    return res
}

console.log('two:'+'\n'+two())

function three(){
    let res=''

    for(let j=1, k=7; j<8; j++,k--){    
        for(let i=1; i<8;i++){
            if(j==1){
                res+='*'
            }
            else{
                if(i==1 || i==k){
                    res+='*'
                }
                else res+=' '
            }
        }
           res+='\n'
    }
    
    return res
}

console.log('three:'+'\n'+three())

function four(){
    let res=''

    for(let j=1, k=1; j<8; j++,k++){    
        for(let i=1; i<8;i++){
            if(j==7){
                res+='*'
            }
            else{
                if(i==1 || i==k){
                    res+='*'
                }
                else res+=' '
            }
        }
           res+='\n'
    }
    
    return res
}

console.log('four:'+'\n'+four())

function five(){
    let res=''

    for(let j=1, k=7; j<8; j++,k--){    
        for(let i=1; i<8;i++){
            if(j==7){
                res+='*'
            }
            else{
                if(i==7 || i==k){
                    res+='*'
                }
                else res+=' '
            }
        }
           res+='\n'
    }
    
    return res
}

console.log('five:'+'\n'+five())

function six(){
    let res=''

    for(let j=1, k=1; j<8; j++,k++){    
        for(let i=1; i<8;i++){
            if(j==1){
                res+='*'
            }
            else{
                if(i==7 || i==k){
                    res+='*'
                }
                else res+=' '
            }
        }
           res+='\n'
    }
    
    return res
}

console.log('six:'+'\n'+six())

function seven(){
    let res=''

    for(let j=1, k=7; j<8; j++,k--){    
        for(let i=1; i<8;i++){

                if(i==j || i==k){
                    res+='*'
                }
                else res+=' '
           
        }
           res+='\n'
    }
    
    return res
}

console.log('seven:'+'\n'+seven())

function eight(){
    let res=''

    for(let j=1, k=7; j<8; j++,k--){    
        for(let i=1; i<8;i++){
            if(j==1){
                res+='*'
            }
            else{
                if(i==j && i<=k|| i==k && i>=j){
                    res+='*'
                }
                else res+=' '
            }
        }
           res+='\n'
    }
    
    return res
}

console.log('eight:'+'\n'+eight())

function nine(){
    let res=''

    for(let j=1, k=7; j<8; j++,k--){    
        for(let i=1; i<8;i++){
            if(j==7){
                res+='*'
            }
            else{
                if(i==j  && i>=k|| i==k && i<=j){
                    res+='*'
                }
                else res+=' '
            }
        }
           res+='\n'
    }
    
    return res
}

console.log('nine:'+'\n'+nine())
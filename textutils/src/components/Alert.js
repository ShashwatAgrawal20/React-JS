import React from 'react'

export default function Alert(props) {


// A function to make the first character of the alert type capital..
// The working of the function is that it will lowercase the whole word then it will make the 1st character uppercase and then slice the other once after that we will get our first character capital and rest as it is...
    const capatalize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    return (


        // We have added the below div because of the CLS--> Cumolative Layout Shift in our page when the alert comes the layout of the website shifts and you should make a website that should have a minimum layout shift that helps in the 'SEO' & its a very good factor in the website ranking if your website don't have any type of layout shifts.. & we have enclosed the other elements in the curly brackets because we can't write the props barely.. 
        <div style={{height: '50px'}}>

        {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        
                     <strong>{capatalize(props.alert.type)}</strong>: {props.alert.msg} 
                </div>}

        </div>
        )
}
let pptx = new PptxGenJS();
$('small').before('<code class="d-block text-black-50 mb-3">(pptxgenjs version: ' + pptx.version + ')</code>');


// Simple Slide
window.doDemo = function do7cells() {
    let pptx = new PptxGenJS();
    let slide = pptx.addSlide();



    // Title
    let titleOpts = {
        x: '5%',
        y: '0.7%',
        w: '100%',
        h: 1.5,
        fontSize: 24,
        color: '000000',
        bold: true,
    };
    slide.addText('Indian History', titleOpts);


    // Pros Texts
    let opts3 = {
        x: '10%',
        y: '22%',
        w: '33%',
        h: 1,
        fontSize: 15,
        color: '000000',
    };
    slide.addText('During 1100BC in India, the Vedic period continued with the composition of the Rigveda, one of the oldest sacred texts.', opts3);



    let opts5 = {
        x: '10%',
        y: '42%',
        w: '33%',
        h: 1,
        fontSize: 15,
        color: '000000',
    };
    slide.addText('The society was organized into tribes and clans, with agriculture and cattle-rearing being the primary occupations.', opts5);
    


    let opts7 = {
        x: '10%',
        y: '62%',
        w: '33%',
        h: 1,
        fontSize: 15,
        color: '000000',
    };
    slide.addText('The caste system began to take shape, dividing society into district social classes based on occupation and status.', opts7);
   


    let opts4 = {
        x: '51%',
        y: '21%',
        w: '32%',
        h: 1,
        fontSize: 15,
        color: '000000',
    };
    slide.addText('Trade flourished along river valleys, particularly the Indus and Saraswati rivers, leading to cultural exchanges.', opts4);
   

    let opts6 = {
        x: '51%',
        y: '42%',
        w: '33%',
        h: 1,
        fontSize: 15,
        color: '000000',
    };
    slide.addText("Art and architecture developed, with early forms of pottery,matalwork, and simplestructures emerging.", opts6);
    
    
     let opts1 = {
        x: '51%',
        y: '62%',
        w: '33%',
        h: 1,
        fontSize: 15,
        color: '000000',
    };
    slide.addText('The period laid the foundation for philosophical and religious ideas that would shape Indian civilization for centuries.', opts1);
    



    // Image options
    let imageOpts = {
        path: 'https://img.icons8.com/?size=32&id=77258&format=png',
        h: 0.2,
        w: '3%',
        x: '6%',
        y: '28%'
    };

    // Add the first image to the slide
    slide.addImage(imageOpts);

    let imageOpts1 = {
        path: 'https://img.icons8.com/?size=32&id=77258&format=png',
        h: 0.2,
        w: '3%',
        x: '6%',
        y: '49%'
    };

    // Add the first image to the slide
    slide.addImage(imageOpts1);

 let imageOpts2 = {
        path: 'https://img.icons8.com/?size=32&id=77258&format=png',
        h: 0.2,
        w: '3%',
        x: '6%',
        y: '69%'
    };

    // Add the first image to the slide
    slide.addImage(imageOpts2);
    
     let imageOpts3 = {
        path: 'https://img.icons8.com/?size=32&id=77258&format=png',
        h: 0.2,
        w: '3%',
        x: '46%',
        y: '28%'
    };

    // Add the first image to the slide
    slide.addImage(imageOpts3);
    
     let imageOpts4 = {
        path: 'https://img.icons8.com/?size=32&id=77258&format=png',
        h: 0.2,
        w: '3%',
        x: '46%',
        y: '49%'
    };

    // Add the first image to the slide
    slide.addImage(imageOpts4);
    
     let imageOpts5 = {
        path: 'https://img.icons8.com/?size=32&id=77258&format=png',
        h: 0.2,
        w: '3%',
        x: '46%',
        y: '69%'
    };

    // Add the first image to the slide
    slide.addImage(imageOpts5);


    pptx.writeFile();
}
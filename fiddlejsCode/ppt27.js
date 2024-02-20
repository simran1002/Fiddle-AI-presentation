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
        fontFace: 'League Spartans'
    };
    slide.addText('Indian History', titleOpts);


    // Pros Texts
    let opts3 = {
        x: '5%',
        y: '43%',
        w: '27%',
        h: 1,
        fontSize: 13,
        color: '000000',
        fontFace: 'Inter'
    };
    slide.addText('Kargil War between India and Pakistan. Indian Prime Minister Atal Bihari Vajpayee visits Lahore for peace talks.', opts3);



    let opts5 = {
        x: '35%',
        y: '43%',
        w: '27%',
        h: 1,
        fontSize: 13,
        color: '000000',
        fontFace: 'Inter'
    };
    slide.addText("Release of the movie 'Hum Dil De Chuke Sanam' directed by Sanjay Leela Bhansali.", opts5);
    


    let opts4 = {
        x: '68%',
        y: '43%',
        w: '27%',
        h: 1,
        fontSize: 13,
        color: '000000',
        fontFace: 'Inter'
    };
    slide.addText("Launch of the Indian Space Research Organization's (ISRO) INSAT-3B satellite for communication purposes.", opts4);
   

    // Image options
    let imageOpts = {
        path: 'https://img.icons8.com/?size=32&id=77258&format=png',
        h: 0.2,
        w: '3%',
        x: '6%',
        y: '25%'
    };

    // Add the first image to the slide
    slide.addImage(imageOpts);

    let imageOpts1 = {
        path: 'https://img.icons8.com/?size=32&id=77258&format=png',
        h: 0.2,
        w: '3%',
        x: '36%',
        y: '25%'
    };

    // Add the first image to the slide
    slide.addImage(imageOpts1);

 let imageOpts2 = {
        path: 'https://img.icons8.com/?size=32&id=77258&format=png',
        h: 0.2,
        w: '3%',
        x: '69%',
        y: '25%'
    };

    // Add the first image to the slide
    slide.addImage(imageOpts2);
    


     // Text below the first image
  let opts = {
    x: '5%' ,
    y: '26.5%',
    w: '40%',
    h: 1,
    fontSize: 15,
    bold: true,
    color: '0000ff',
    fontFace: 'League Spartans'
  };
  slide.addText(
    "Events in 1999",
    opts
  );


 // Text below the first image
  let opts11 = {
    x: '35%' ,
    y: '26.5%',
    w: '25%',
    h: 1,
    fontSize: 15,
    bold: true,
    color: '0000ff',
    fontFace: 'League Spartans'
  };
  slide.addText(
    "Cultural Highlights",
    opts11
  );

 // Text below the first image
  let opts2 = {
    x: '68%' ,
    y: '26.5%',
    w: '15%',
    h: 1,
    fontSize: 15,
    bold: true,
    color: '0000ff',
    fontFace: 'League Spartans'
  };
  slide.addText(
    "Technological Advancements",
    opts2
  );


 



    pptx.writeFile();
}
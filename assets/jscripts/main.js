const speakers = [
    {
      name: 'Chris Andreson',
      bio: 'Curator of TED',
      about: 'After a long career in journalism and publishing, Chris Anderson became the curator of the TED Conference in 2002 and has developed it as a platform for identifying and disseminating ideas worth spreading.',
      picture: 'assets/images/chris-anderson.jpg',
    },
    {
      name: 'Max Hawkins',
      bio: 'Artist and computer scientist',
      about: 'Since 2015, computer programs Max Hawkins wrote have been giving him randomly generated instructions on how to live his life.',
      picture: 'assets/images/max-hawkins.jpg',
    },
    {
      name: 'Anna Piperal',
      bio: 'E-governance expert',
      about: 'Anna Piperal is a branding expert and digital enthusiast who strives to spread the idea of a "zero-bureaucracy" government ecosystem.',
      picture: 'images/anna-piperal.jpg',
    },
    {
      name: 'Tom Griffhits',
      bio: 'Psychologist, cognitive scientist',
      about: 'Tom Griffiths uses ideas from computer science to understand how human minds work.',
      picture: 'assets/images/tom-griffiths.jpg',
    },
    {
      name: 'Karen Tordjman',
      bio: 'Customer experience pro',
      about: 'Karen Lellouche Tordjman is a global leader on customer experience and a BHI fellow on the future of customer interactions.',
      picture: 'assets/images/karen-tordjman.jpg',
    },
    {
      name: 'Yann LeCun',
      bio: 'Computer scientist, AI researcher',
      about: 'Yann LeCun is chief AI scientist at Facebook and Silver Professor at New York University.',
      picture: 'assets/images/yann-lecun.jpg',
    },
  ];
  //create new button
  const moreBtn = document.createElement('button');
  
  //add style to button
  moreBtn.classList.add('my-speakers-btn');
  moreBtn.setAttribute('type', 'button');
  moreBtn.innerHTML = 'MORE <i class="fa fa-arrow-down"></i>';
  
  //Create less button
  const lessBtn = document.createElement('button');
  lessBtn.classList.add('my-speakers-btn');
  lessBtn.setAttribute('type', 'button');
  lessBtn.innerHTML = 'Less <i class="fa fa-arrow-up"></i>';
  //add event listener to our button
  moreBtn.addEventListener('click', () => {
   
    document.querySelector('.my-speakers-group').innerHTML = '';
    for (let i = 0; i < speakers.length; i += 1) {
      const speaker = document.createElement('article');
      const speakerImg = document.createElement('div');
      const imageDots = document.createElement('img');
      const speakerPicture = document.createElement('img');
      const speakerInfo = document.createElement('div');
      const speakerName = document.createElement('h3');
      const speakerBio = document.createElement('h4');
      const hr = document.createElement('hr');
      const speakerAbout = document.createElement('p');
      speaker.classList.add('my-speaker');
      speakerImg.classList.add('my-speaker-img');
      imageDots.classList.add('my-speaker-dots');
      imageDots.setAttribute('src', 'assets/images/image-dots.png');
      imageDots.setAttribute('alt', 'dots');
      speakerPicture.classList.add('my-speaker-picture');
      speakerPicture.setAttribute('src', speakers[i].picture);
      speakerPicture.setAttribute('alt', 'my-speaker-picture');
      speakerInfo.classList.add('my-speaker-info');
      speakerName.classList.add('my-speaker-name');
      speakerName.textContent = speakers[i].name;
      speakerBio.classList.add('my-speaker-bio');
      speakerBio.textContent = speakers[i].bio;
      speakerAbout.classList.add('my-speaker-about');
      speakerAbout.textContent = speakers[i].about;
  
      speakerImg.append(imageDots, speakerPicture);
      speakerInfo.append(speakerName, speakerBio, hr, speakerAbout);
      speaker.append(speakerImg, speakerInfo);
  
      document.querySelector('.my-speakers-group').append(speaker);
      document.querySelector('.my-speakers-group').append(lessBtn);
    }
    
  });
  //Less button 
  lessBtn.addEventListener('click',() =>{
    document.querySelector('.my-speakers-group').innerHTML = '';
    for (let i = 0; i < 2; i += 1) {
      const speaker = document.createElement('article');
      const speakerImg = document.createElement('div');
      const imageDots = document.createElement('img');
      const speakerPicture = document.createElement('img');
      const speakerInfo = document.createElement('div');
      const speakerName = document.createElement('h3');
      const speakerBio = document.createElement('h4');
      const hr = document.createElement('hr');
      const speakerAbout = document.createElement('p');
      speaker.classList.add('my-speaker');
      speakerImg.classList.add('my-speaker-img');
      imageDots.classList.add('my-speaker-dots');
      imageDots.setAttribute('src', 'assets/images/image-dots.png');
      imageDots.setAttribute('alt', 'dots');
      speakerPicture.classList.add('my-speaker-picture');
      speakerPicture.setAttribute('src', speakers[i].picture);
      speakerPicture.setAttribute('alt', 'speaker-picture');
      speakerInfo.classList.add('my-speaker-info');
      speakerName.classList.add('my-speaker-name');
      speakerName.textContent = speakers[i].name;
      speakerBio.classList.add('my-speaker-bio');
      speakerBio.textContent = speakers[i].bio;
      speakerAbout.classList.add('my-speaker-about');
      speakerAbout.textContent = speakers[i].about;
  
      speakerImg.append(imageDots, speakerPicture);
      speakerInfo.append(speakerName, speakerBio, hr, speakerAbout);
      speaker.append(speakerImg, speakerInfo);
  
      document.querySelector('.my-speakers-group').append(speaker);
    }
  
    document.querySelector('.my-speakers-group').append(moreBtn);
  });
  
  
  // Load the first cards
  
  document.addEventListener('DOMContentLoaded', () => {
    for (let i = 0; i < 2; i += 1) {
      const speaker = document.createElement('article');
      const speakerImg = document.createElement('div');
      const imageDots = document.createElement('img');
      const speakerPicture = document.createElement('img');
      const speakerInfo = document.createElement('div');
      const speakerName = document.createElement('h3');
      const speakerBio = document.createElement('h4');
      const hr = document.createElement('hr');
      const speakerAbout = document.createElement('p');
      speaker.classList.add('my-speaker');
      speakerImg.classList.add('my-speaker-img');
      imageDots.classList.add('my-speaker-dots');
      imageDots.setAttribute('src', 'assets/images/image-dots.png');
      imageDots.setAttribute('alt', 'dots');
      speakerPicture.classList.add('my-speaker-picture');
      speakerPicture.setAttribute('src', speakers[i].picture);
      speakerPicture.setAttribute('alt', 'speaker-picture');
      speakerInfo.classList.add('my-speaker-info');
      speakerName.classList.add('my-speaker-name');
      speakerName.textContent = speakers[i].name;
      speakerBio.classList.add('my-speaker-bio');
      speakerBio.textContent = speakers[i].bio;
      speakerAbout.classList.add('my-speaker-about');
      speakerAbout.textContent = speakers[i].about;
  
      speakerImg.append(imageDots, speakerPicture);
      speakerInfo.append(speakerName, speakerBio, hr, speakerAbout);
      speaker.append(speakerImg, speakerInfo);
  
      document.querySelector('.my-speakers-group').append(speaker);
    }
  
    document.querySelector('.my-speakers-group').append(moreBtn);
  });
  
  
  
  
  
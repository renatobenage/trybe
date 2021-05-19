// -------------------- FUNÇÃO ADICIONA BOTÃO ---------------

function buttonMusic() {
  // Incluir um "Nome do Botão"
  let musicArray = [
    'Só Em Ti',
    'Hoje Aqui',
  ];
  // Incluir uma variável
  let musicVariable = [
    'soEmTi()',
    'hojeAqui()'
  ]

  let acessSectionButton = document.querySelector('.button-section')

  for (let i = 0; i < musicArray.length; i++) {
    let keepArray = musicArray[i]
    let keepArrayVariable = musicVariable[i]

    let createButton = document.createElement('BUTTON')
    createButton.setAttribute('onclick', keepArrayVariable);
    createButton.innerText = keepArray
    console.log(createButton)

    acessSectionButton.appendChild(createButton)
  }
}

// ----------------- FUNÇÃO ADICIONA LETRA E CIFRA -----------------------
















function soEmTi() {
  let thisText = document.getElementById('music-text')
  thisText.innerHTML = 
  `  
  <h3>Só Em Ti</h3>
  <pre>
  <b>Tom:</b><c> Eb</c>
  <b>Intro:</b><c> F – Eb – Bb/D – Eb – Bb/D – Cm
         Fm – Eb – Bb/D – Cm – Bb – Ab - Eb
  </c>

  <c>            Fm  Fm/Eb    Bb/D       Eb  Bb/D Cm Cm/Bb</c>
  Porque Teu amor   é  melhor do que a vida,
  <c>        Fm              Bb                Csus7</c>
  Os meus lábios Te louvarão enquanto eu viver,
  <c>Bb/D C/E  Fm    Fm/Eb  Bb/D   Eb  Eb/G  Ab Eb/G </c>
  Em   teu  nome levantarei as minhas  mãos,
  <c>      Fm           Bb        Eb</c>
  A minh'alma se fartará, só em Ti.

  <c>Bb/D  Cm  Ab      Eb            Bb</c>
  Só em Ti,   a minh'alma se fartará,
  <c>      Cm  Ab    Eb/G       Bb</c>
  Só em Ti,  só em Ti Meu Jesus,
  <c>      Cm Ab       Eb           Bb</c>
  Só em Ti,  a minh'alma se fartará,
  <c>      Ab Bb    Ab/C Bb/D  Bb    Eb</c>
  Só em Ti,  só em Ti       Meu Jesus.

  (Subindo de tom discretamente... Tom Bb)

  <c>      Eb/D   Cm  Cm/Bb F/A           Bb F/A Gm Gm/F</c>
  Porque Teu  amor    é melhor do que a vida,
  <c>       Cm            F               Gsus7 G</c>
  Os meus lábios Te louvarão enquanto eu viver,
  <c>F/A G/B Cm       Cm/Bb F/A     Bb Bb/D Eb Bb/D</c>
  Em  teu nome  levantarei    as minhas mãos,
  <c>      Cm           F         Bb</c>
  A minh'alma se fartará, só em Ti.


  <c>F/A   Gm Eb      Bb              F</c>
  Só em Ti,   a minh'alma se fartará,
  <c>      Gm Eb      Bb/D       F</c>
  Só em Ti,   só em Ti Meu Jesus,
  <c>      Gm Eb     Bb/D          F</c>
  Só em Ti, a minh'alma se fartará,
  <c>      Eb F       Eb/G F/A F      Bb</c>
  Só em Ti,  só em Ti       Meu Jesus.

            (BATERIA TOM C)

    <c>Am      F/A        C/G          G</c>
          Só em Ti, a minh'alma se fartará,
          <c>     Am F      C/E       G</c>
          Só em Ti, só em Ti Meu Jesus,
          <c>       Am G Am F     C/E           G</c>
          Só em Ti,      a minh'alma se fartará,
          <c>      F G      F/A G/B G       C</c>
          Só em Ti, só em Ti      Meu Jesus.

          (BEM CALMO)

          <c>      Am F        C            G</c>
          Só em Ti, a minh'alma se fartará,
          <c>      Am F      C/E     G</c>
          Só em Ti, só em Ti Meu Jesus,
          <c>      Am F      C/E           G</c>
          Só em Ti, a minh'alma se fartará,
          <c>      F G       F/A G/B G       C</c>
          Só em Ti, só em Ti      Meu Jesus.
  `
}

function hojeAqui() {
  let thisText = document.getElementById('music-text')
  thisText.innerHTML = `
  <h3>Hoje Aqui</h3>
  <!-- <p> -->
  <pre>
  <b>Tom:</b><c>  D</c>

    <c>A       D        Bm</c>
    Hoje aqui meu Jesus
    <c>     Em         Asus A</c>
    me tomou em seus braços
    <c>G/B A/C# D      Bm7     Em   Asus A  A/G</c>
    E   senti   o calor do Espírito Santo
    <c>       D/F#            G</c>
    Vou em paz pois o meu Deus
    <c>       D/F#        G</c>
    Ao meu lado vai ficar
    <c>     Bm7       Em7      Em7/A</c>
    E em breve sua face eu verei
    <c>G/A  A     D</c>
        Lá no céu
    
    <c>A       D        Bm</c>
    Hoje aqui meu Jesus
    <c>     Em         Asus A</c>
    me tomou em seus braços
    <c>G/B A/C# D      Bm7     Em   Asus A  A/G</c>
    E   senti   o calor do Espírito Santo
    <c>       D/F#            G</c>
    Vou em paz pois o meu Deus
    <c>       D/F#        G</c>
    Ao meu lado vai ficar
    <c>     Bm7       Em7      Em7/A</c>
    E em breve sua face eu verei
    <c>G/A  A     D</c>
        Lá no céu
    
<c>C#m B      E        C#m</c>
    Hoje aqui meu Jesus
    <c>     F#m         Bsus</c>
    Me tomou em seus braços
    <c>B    E      C#m      F#m Bsus B  B/A</c>
    E senti o calor do Espírito Santo
    <c>       E/G#            A</c>
    Vou em paz pois o meu Deus
    <c>       E/G#        A</c>
    Ao meu lado vai ficar
    <c>     C#m7     F#m7     Bsus</c>
    E em breve sua face eu verei
    <c>A/B  B      E  </c>
        lá no céu 
  `
}

// ------------- Esta função é apenas para copiar/colar ----------------

//! NÃO ALTERAR NADA ABAIXO

function colarECopiar() {
  let thisText = document.getElementById('music-text')
  thisText.innerHTML = `
  substituir este texto pela cifra
  `
}

buttonMusic()

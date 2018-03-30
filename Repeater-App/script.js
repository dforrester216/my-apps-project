var namesArr = ['Nelin','Jamal','Robert','Warner','Faith','Michael','Miteau','Cristina','Alissa','Allen','Jacqueline','Christopher','Nicholas','Zoe','Jose','Daniel','Alyssa','Tyla','Brittania','Tyler'];



var fullNamesArr = ['Nelin Bakrac','Jamal Bevel','Robert Brabson','Warner Bubb','Faith Clark','Michael Entrekin','Miteau Francois','Cristina Giammatt','Alissa Jackson','Allen Kovach','Jacqueline Lurch','Christopher Monte','Nicholas Montefer','Zoe Petrovic','Jose Reyes','Daniel Rovegno','Alyssa Shelbaugh','Tyla Sylvester','Brittania Warren','Tyler Wildrick'];



var content = ', </p><p>With less than two weeks left to go until the first exam, I am just touching base to make sure you are on the right track with your studying efforts.  I have noticed that you have not completed all the self-assessments so far.  Those are very important for your success on the exam and have to be completed for the following modules to be \'unlocked\'.  Could you please get back to me and let me know why you haven\'t completed the self-assessments, or if you\'re having difficulties, and if you are able to unlock all the modules.</p><p>Thanks,</p><p>Daniel Forrester</p><p>TA FIN 3403.791</p>'



for (var i = 0; i < namesArr.length; i++) {
  document.write((i+1) + ' - ' + fullNamesArr[i] + ' - Subject: Quick reminder and request' + '<hr /><p>Hello ' + namesArr[i] + content + '<p></p><p></p><p></p><p></p><p></p><hr />' );
}

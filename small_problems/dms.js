function dms(number) {
  const CIRCLE = 360;
  const M_PER_D = 60;
  const S_PER_M = 60;

  number %= CIRCLE;
  if (number < 0) number += CIRCLE; 

  let degrees = Math.floor(number);
  let minutes = (number % 1) * M_PER_D;
  let seconds = Math.round((minutes % 1) * S_PER_M);
  minutes = Math.floor(minutes);

  if (seconds === S_PER_M) {
    minutes += 1;
    seconds = 0;
  }

  minutes = String(minutes).padStart(2, '0');
  seconds = String(seconds).padStart(2, '0');

  console.log(`${degrees}\xb0${minutes}'${seconds}"`);
}

dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"
dms(-40.7);
dms(-420);
dms(400);
dms(-1);

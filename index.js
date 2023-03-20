for (let angka = 1; angka <= 1000; angka++) {
  const fizz = angka % 3 === 0 ? 'fizz' : '';
  const buzz = angka % 5 === 0 ? 'buzz' : '';
  (fizz || buzz) && console.log(`${angka} = ${fizz}${buzz}`);
}

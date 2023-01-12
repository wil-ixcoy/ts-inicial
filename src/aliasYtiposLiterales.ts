/* con type podemos crear nuestro propios tipos */

/* para asignar el nuevo tipo, es con =  */

/* UserID es un nuevo tipo, un cojunto de tipos que nosotros definimos */
type UserID = string | number | boolean;

/* la variable id tiene como tipo UserID */
let id: UserID;

id = 234;
id = 'q35sdfareeqf';

/* tipos literales, se asigna tipos de datos que neceistamo */
type Sizes = 'S' | 'M' | 'L' | 'XL';
let tamañoCamisa: Sizes;
/* si se usa uno que no existe dentro, lo tendra como nulo */

//tamañoCamisa = 'd';

/* debe ser literal */
tamañoCamisa = 'L';

function idYTamaño(id_user: UserID, tamaño: Sizes) {
  console.log(
    'El usuario con id ' + id_user + ' usa el tamaño de la camisa es ' + tamaño
  );
}
idYTamaño(324,"M");

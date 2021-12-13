describe('basic data types', () => {

  it('is easy to declare a variable', () => {
    let a = 10, b = 20;
    let answer = a + b;

    expect(answer).toBe(30);
  });

  describe('declaring variables', () => {
    it('untyped variables', () => {
      let a;

      a = 19;

      expect(a).toBe(19);

      a = 'tacos';
      expect(a).toBe('tacos');

      a = function (x: number) {
        return x * 2;
      }

      expect(typeof (a)).toBe('function');

      expect(a(10)).toBe(20);

      it('setting data types for a variable', () => {
        let x: number | string; //union type
        x = 12;

        x = 'tacos';
      });

      it('initializing a variable', () => {
        let x: number | string = 12;
        let y = 18;

        x = 'Tacos';

      });

      it('declaring constants', () => {
        const x = 12; //you cannot reassign a new value to this name.

        //x = 13;

        const jobs = ['Dev', 'QA', 'STE'];

        //jobs = ['Fry Cook'];

        jobs[0] = 'Fry Cook';

        //jobs = [...jobs, 'Scrum Master']

        jobs.push('Scrum Master');

        expect(jobs).toEqual(['Fry Cook', 'QA', 'STE', 'Scrum Master']);

        //It's not a real constant lol...

        const book = { title: 'War and Piece', author: 'Tolstoy' };

        book.title = 'War and Peace';
      });

      //Tomorrow is DEATH MATCH AAAAAAA
      //DON'T STAY UP PLAYING FFXIV TONIGHT (Jeff is amazing)
      describe('built-in types', () => {
        it('numbers', () => {
          // 64 floating point numbers.

          let n1 = 12;
          let n2 = 3.1415;
          let n3 = 0xFFF; // Base 16.
          let n4 = 0o111; // Base 8 - octal
          let n5 = 0b111011; // Base 2 - Binary
          let lindsayPay = 1_339_398_973_819; //thousands place thing.

        });
        describe('strings', () => {
          it('standard string delimiters', () => {
            let s1 = "dog";
            let s2 = "dog";
            expect(s1).toBe(s2);

            let story = "She said \"Haha\" to him";
            let story2 = 'She said "Haha" to him';

            expect(story).toBe(story2);
          });
          it('literal or format strings', () => {
            let s1 = `dog`;
            let s2 = 'dog';

            expect(s1).toBe(s2);

            let story = `Chapter 1.

                    It was a dark and stormy night.

                    The End`;
            console.log(story);

            let name = 'Earl', pay = 120_000;

            let message = 'The customer\'s name is ' + name + ' and they are paid ' + pay + ' a year';
            let message2 = `The customer's name is ${name} and they are paid ${pay} a year`;
            console.log(message, message2);

            let message3 = `<div class="pretty">
                    <h1>Tacos are good</h1>
                    </div>`
          });

        });
        it('booleans', () => {
          let ok = true;
          let nope = false;

          if ('tacos') {
            console.log('Delicious!');
          }

          //truthy and falsy
          //when a value is converted to a boolean, does it convert to true or false
          expect('tacos').toBeTruthy(); //any string with a greater than 0 length is true
          expect('').toBeFalsy();
          expect(9).toBeTruthy();
          expect(-9).toBeTruthy();
          expect(0).toBeFalsy();
          expect(undefined).toBeFalsy();
          expect(null).toBeFalsy();

        });
        it('testing for equality', () => {
          // use === for equality
          // use !== for inequality

          //if you have to convert, you do it yourself.

          const pay = 12.93;
          if (pay === 12.93) {

          }
        });
      });
      it('has a literal for objects', () => {
        let pay = 32;

        const movie = {
          title: 'Jaws',
          director: 'Spielberg',
          yearReleased: 1977
        };

        //movie.title = 'Jaws';

        expect(movie.title).toBe('Jaws');
        //200 lines of code later


      });
    });
  });
});

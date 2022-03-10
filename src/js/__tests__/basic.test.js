import {Team, errorRepository} from '../basic';


// проверка Класса c данными о персонажах команды
test('shoud check Team formation', () => {
  let john = { name: "John" };
  let pete = { name: "Pete" };
  let john2 = { name: "John2" };
  let mary2 = { name: "Mary2" };
  const m = new Team();
  m.add(john);
  m.add(john2);
  m.addAll(john, john2, pete, mary2);
  const result = m.toArray();
  expect(result).toEqual([
    { name: "John" },
    { name: "John2" },
    { name: "Pete" },
    { name: "Mary2" }
  ]);
});

// проверка работы Класса репозитория ошибок
test('shoud check ErrorRepository', () => {
  let john2 = { name: "John2" };
  const m = new Team();
  m.add(john2);
  m.add(john2);
  const result = errorRepository.translate('100');
  expect(result).toBe('попытка добавить уже внесённого персонажа!');	
  });
  
   



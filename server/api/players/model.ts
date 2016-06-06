export let players: IPlayer[] = [];
export function reset() {
  players.length = 0;
}
export function remove(id: number) {
  players = players.filter((item) => item.id !== id);
}
export function seed() {
players.push(  {
    id: 1,
    firstName: 'Peter',
    lastName: 'Griffin',
    age: 42,
    sport: 'football',
    position: 'Wide Receiver',
    height: 65,
    weight: 300,
    number: 86,
    image: 'http://f.tqn.com/y/animatedtv/1/S/4/T/fGuyPeterRush09_22_72.jpg',
    teamName: 'New England Patriots',
    college: 'Quahog College',
    nationality: 'USA'
  },
  {
    id: 2,
    firstName: 'Tyler',
    lastName: 'The Creator',
    age: 25,
    sport: 'BMX',
    position: 'Bike Rider',
    height: 74,
    weight: 165,
    number: 0,
    image: 'http://www.billboard.com/files/media/tyler-the-creator-julian-berman-billboard-650.jpg',
    teamName: 'Odd Future',
    college: 'NA',
    nationality: 'USA'
  });
}

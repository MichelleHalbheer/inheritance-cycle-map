import { Installment, Chapter, Character, DataBundle, Map, Series, MediaType } from 'character-journey-map/models';
import map from '../assets/alagaesia_reimagined.png';
//import black_white_map from '../assets/MapAlagaesia.jpg';

const mapData: Map = {
    image: map,
    dimensions: [1440, 2560],
    source: 'https://www.deviantart.com/stoneward13/art/Alagaesia-Reimagined-v8-953577978'
};

const EragonChapterList: Chapter[] = [
    { altName: 'Prologue', chapter: 0, part: 0 },
    { chapter: 1, part: 1 },
    { chapter: 2, part: 1 },
    { chapter: 3, part: 1 },
    { chapter: 4, part: 1 },
    { chapter: 5, part: 1 },
    { chapter: 6, part: 1 },
    { chapter: 7, part: 1 },
    { chapter: 8, part: 1 },
    { chapter: 9, part: 1 },
    { chapter: 10, part: 1 },
    { chapter: 11, part: 1 },
    { chapter: 12, part: 1 },
    { chapter: 13, part: 1 },
    { chapter: 14, part: 1 },
    { chapter: 15, part: 1 },
    { chapter: 16, part: 1 },
    { chapter: 17, part: 1 },
    { chapter: 18, part: 1 },
    { chapter: 19, part: 1 },
    { chapter: 20, part: 1 },
    { chapter: 21, part: 1 },
    { chapter: 22, part: 1 },
    { chapter: 23, part: 1 },
    { chapter: 24, part: 1 },
    { chapter: 25, part: 1 },
    { chapter: 26, part: 1 },
    { chapter: 27, part: 1 },
    { chapter: 28, part: 1 },
    { chapter: 29, part: 1 },
    { chapter: 30, part: 1 },
    { chapter: 31, part: 1 },
    { chapter: 32, part: 1 },
    { chapter: 33, part: 1 },
    { chapter: 34, part: 1 },
    { chapter: 35, part: 1 },
    { chapter: 36, part: 1 },
    { chapter: 37, part: 1 },
    { chapter: 38, part: 1 },
    { chapter: 39, part: 1 },
    { chapter: 40, part: 1 },
    { chapter: 41, part: 1 },
    { chapter: 42, part: 1 },
    { chapter: 43, part: 1 },
    { chapter: 44, part: 1 },
    { chapter: 45, part: 1 },
    { chapter: 46, part: 1 },
    { chapter: 47, part: 1 },
    { chapter: 48, part: 1 },
    { chapter: 49, part: 1 },
    { chapter: 50, part: 1 },
    { chapter: 51, part: 1 },
    { chapter: 52, part: 1 },
    { chapter: 53, part: 1 },
    { chapter: 54, part: 1 },
    { chapter: 55, part: 1 },
    { chapter: 56, part: 1 },
    { chapter: 57, part: 1 },
    { chapter: 58, part: 1 },
    { chapter: 59, part: 1 },
];

const EldestChapterList: Chapter[] = [
    { chapter: 1, part: 1 },
    { chapter: 2, part: 1 },
    { chapter: 3, part: 1 },
    { chapter: 4, part: 1 },
    { chapter: 5, part: 1 },
    { chapter: 6, part: 1 },
    { chapter: 7, part: 1 },
    { chapter: 8, part: 1 },
    { chapter: 9, part: 1 },
    { chapter: 10, part: 1 },
    { chapter: 11, part: 1 },
    { chapter: 12, part: 1 },
    { chapter: 13, part: 1 },
    { chapter: 14, part: 1 },
    { chapter: 15, part: 1 },
    { chapter: 16, part: 1 },
    { chapter: 17, part: 1 },
    { chapter: 18, part: 1 },
    { chapter: 19, part: 1 },
    { chapter: 20, part: 1 },
    { chapter: 21, part: 1 },
    { chapter: 22, part: 1 },
    { chapter: 23, part: 1 },
    { chapter: 24, part: 1 },
    { chapter: 25, part: 1 },
    { chapter: 26, part: 1 },
    { chapter: 27, part: 1 },
    { chapter: 28, part: 1 },
    { chapter: 29, part: 1 },
    { chapter: 30, part: 1 },
    { chapter: 31, part: 1 },
    { chapter: 32, part: 1 },
    { chapter: 33, part: 1 },
    { chapter: 34, part: 1 },
    { chapter: 35, part: 1 },
    { chapter: 36, part: 1 },
    { chapter: 37, part: 1 },
    { chapter: 38, part: 1 },
    { chapter: 39, part: 1 },
    { chapter: 40, part: 1 },
    { chapter: 41, part: 1 },
    { chapter: 42, part: 1 },
    { chapter: 43, part: 1 },
    { chapter: 44, part: 1 },
    { chapter: 45, part: 1 },
    { chapter: 46, part: 1 },
    { chapter: 47, part: 1 },
    { chapter: 48, part: 1 },
    { chapter: 49, part: 1 },
    { chapter: 50, part: 1 },
    { chapter: 51, part: 1 },
    { chapter: 52, part: 1 },
    { chapter: 53, part: 1 },
    { chapter: 54, part: 1 },
    { chapter: 55, part: 1 },
    { chapter: 56, part: 1 },
    { chapter: 57, part: 1 },
    { chapter: 58, part: 1 },
    { chapter: 59, part: 1 },
    { chapter: 60, part: 1 },
    { chapter: 61, part: 1 },
    { chapter: 62, part: 1 },
    { chapter: 63, part: 1 },
    { chapter: 64, part: 1 },
    { chapter: 65, part: 1 },
    { chapter: 66, part: 1 },
    { chapter: 67, part: 1 },
    { chapter: 68, part: 1 },
    { chapter: 69, part: 1 },
    { chapter: 70, part: 1 },
    { chapter: 71, part: 1 },
];

const BrisingrChapterList: Chapter[] = [
    { chapter: 1, part: 1 },
    { chapter: 2, part: 1 },
    { chapter: 3, part: 1 },
    { chapter: 4, part: 1 },
    { chapter: 5, part: 1 },
    { chapter: 6, part: 1 },
    { chapter: 7, part: 1 },
    { chapter: 8, part: 1 },
    { chapter: 9, part: 1 },
    { chapter: 10, part: 1 },
    { chapter: 11, part: 1 },
    { chapter: 12, part: 1 },
    { chapter: 13, part: 1 },
    { chapter: 14, part: 1 },
    { chapter: 15, part: 1 },
    { chapter: 16, part: 1 },
    { chapter: 17, part: 1 },
    { chapter: 18, part: 1 },
    { chapter: 19, part: 1 },
    { chapter: 20, part: 1 },
    { chapter: 21, part: 1 },
    { chapter: 22, part: 1 },
    { chapter: 23, part: 1 },
    { chapter: 24, part: 1 },
    { chapter: 25, part: 1 },
    { chapter: 26, part: 1 },
    { chapter: 27, part: 1 },
    { chapter: 28, part: 1 },
    { chapter: 29, part: 1 },
    { chapter: 30, part: 1 },
    { chapter: 31, part: 1 },
    { chapter: 32, part: 1 },
    { chapter: 33, part: 1 },
    { chapter: 34, part: 1 },
    { chapter: 35, part: 1 },
    { chapter: 36, part: 1 },
    { chapter: 37, part: 1 },
    { chapter: 38, part: 1 },
    { chapter: 39, part: 1 },
    { chapter: 40, part: 1 },
    { chapter: 41, part: 1 },
    { chapter: 42, part: 1 },
    { chapter: 43, part: 1 },
    { chapter: 44, part: 1 },
    { chapter: 45, part: 1 },
    { chapter: 46, part: 1 },
    { chapter: 47, part: 1 },
    { chapter: 48, part: 1 },
    { chapter: 49, part: 1 },
    { chapter: 50, part: 1 },
    { chapter: 51, part: 1 },
    { chapter: 52, part: 1 },
    { chapter: 53, part: 1 },
    { chapter: 54, part: 1 },
    { chapter: 55, part: 1 },
    { chapter: 56, part: 1 },
    { chapter: 57, part: 1 },
    { chapter: 58, part: 1 },
];

const InheritanceChapterList: Chapter[] = [
    { chapter: 1, part: 1 },
    { chapter: 2, part: 1 },
    { chapter: 3, part: 1 },
    { chapter: 4, part: 1 },
    { chapter: 5, part: 1 },
    { chapter: 6, part: 1 },
    { chapter: 7, part: 1 },
    { chapter: 8, part: 1 },
    { chapter: 9, part: 1 },
    { chapter: 10, part: 1 },
    { chapter: 11, part: 1 },
    { chapter: 12, part: 1 },
    { chapter: 13, part: 1 },
    { chapter: 14, part: 1 },
    { chapter: 15, part: 1 },
    { chapter: 16, part: 1 },
    { chapter: 17, part: 1 },
    { chapter: 18, part: 1 },
    { chapter: 19, part: 1 },
    { chapter: 20, part: 1 },
    { chapter: 21, part: 1 },
    { chapter: 22, part: 1 },
    { chapter: 23, part: 1 },
    { chapter: 24, part: 1 },
    { chapter: 25, part: 1 },
    { chapter: 26, part: 1 },
    { chapter: 27, part: 1 },
    { chapter: 28, part: 1 },
    { chapter: 29, part: 1 },
    { chapter: 30, part: 1 },
    { chapter: 31, part: 1 },
    { chapter: 32, part: 1 },
    { chapter: 33, part: 1 },
    { chapter: 34, part: 1 },
    { chapter: 35, part: 1 },
    { chapter: 36, part: 1 },
    { chapter: 37, part: 1 },
    { chapter: 38, part: 1 },
    { chapter: 39, part: 1 },
    { chapter: 40, part: 1 },
    { chapter: 41, part: 1 },
    { chapter: 42, part: 1 },
    { chapter: 43, part: 1 },
    { chapter: 44, part: 1 },
    { chapter: 45, part: 1 },
    { chapter: 46, part: 1 },
    { chapter: 47, part: 1 },
    { chapter: 48, part: 1 },
    { chapter: 49, part: 1 },
    { chapter: 50, part: 1 },
    { chapter: 51, part: 1 },
    { chapter: 52, part: 1 },
    { chapter: 53, part: 1 },
    { chapter: 54, part: 1 },
    { chapter: 55, part: 1 },
    { chapter: 56, part: 1 },
    { chapter: 57, part: 1 },
    { chapter: 58, part: 1 },
    { chapter: 59, part: 1 },
    { chapter: 60, part: 1 },
    { chapter: 61, part: 1 },
    { chapter: 62, part: 1 },
    { chapter: 63, part: 1 },
    { chapter: 64, part: 1 },
    { chapter: 65, part: 1 },
    { chapter: 66, part: 1 },
    { chapter: 67, part: 1 },
    { chapter: 68, part: 1 },
    { chapter: 69, part: 1 },
    { chapter: 70, part: 1 },
    { chapter: 71, part: 1 },
    { chapter: 72, part: 1 },
    { chapter: 73, part: 1 },
    { chapter: 74, part: 1 },
    { chapter: 75, part: 1 },
    { chapter: 76, part: 1 },
    { chapter: 77, part: 1 },
    { chapter: 78, part: 1 },
];

const ForkWitchWormChapterList: Chapter[] = [
    { altName: 'Mount Arngor', chapter: 1, part: 1 },
    { altName: 'A Fork in the Road', chapter: 2, part: 1 },
    { altName: 'The Hall of Colors', chapter: 3, part: 1 },
    { altName: 'Rhymes and Riddles', chapter: 1, part: 2 },
    { altName: 'On the Nature of Stars', chapter: 5, part: 2 },
    { altName: 'Questions and Answers', chapter: 6, part: 2 },
    { altName: 'Deadfall', chapter: 7, part: 3 },
    { altName: 'The Worm of Kulkaras', chapter: 8, part: 3 },
    { altName: 'New Beginnings', chapter: 9, part: 3 },
];

const MurtaghChapterList: Chapter[] = [
    { altName: 'Argument', chapter: 0, part: 0 },
    { chapter: 1, part: 1 },
    { chapter: 2, part: 1 },
    { chapter: 3, part: 1 },
    { chapter: 4, part: 1 },
    { chapter: 5, part: 1 },
    { chapter: 1, part: 2 },
    { chapter: 2, part: 2 },
    { chapter: 3, part: 2 },
    { chapter: 4, part: 2 },
    { chapter: 5, part: 2 },
    { chapter: 6, part: 2 },
    { chapter: 7, part: 2 },
    { chapter: 8, part: 2 },
    { chapter: 9, part: 2 },
    { chapter: 10, part: 2 },
    { chapter: 11, part: 2 },
    { chapter: 12, part: 2 },
    { chapter: 13, part: 2 },
    { chapter: 14, part: 2 },
    { chapter: 15, part: 2 },
    { chapter: 16, part: 2 },
    { chapter: 1, part: 3 },
    { chapter: 2, part: 3 },
    { chapter: 3, part: 3 },
    { chapter: 4, part: 3 },
    { chapter: 5, part: 3 },
    { chapter: 6, part: 3 },
    { chapter: 7, part: 3 },
    { chapter: 8, part: 3 },
    { chapter: 9, part: 3 },
    { chapter: 10, part: 3 },
    { chapter: 11, part: 3 },
    { chapter: 12, part: 3 },
    { chapter: 13, part: 3 },
    { chapter: 14, part: 3 },
    { chapter: 15, part: 3 },
    { chapter: 16, part: 3 },
    { chapter: 17, part: 3 },
    { chapter: 18, part: 3 },
    { chapter: 19, part: 3 },
    { chapter: 20, part: 3 },
    { chapter: 21, part: 3 },
    { chapter: 22, part: 3 },
    { chapter: 23, part: 3 },
    { chapter: 24, part: 3 },
    { chapter: 1, part: 4 },
    { chapter: 2, part: 4 },
    { chapter: 3, part: 4 },
    { chapter: 4, part: 4 },
    { chapter: 1, part: 5 }
];

const eragon_portrait = require('../assets/eragon_portrait.png');
const arya_portrait = require('../assets/arya_portrait.jpg');
const murtagh_portrait = require('../assets/murtagh_portrait.jpg');
const roran_portrait = require('../assets/roran_portrait.webp');

export const characters: Character[] = [
    {
        name: 'Eragon',
        image: eragon_portrait,
        color: '#4682B4',
        wikiLink: 'https://inheritance.fandom.com/wiki/Eragon',
        firstAppearance: { 1: EragonChapterList[1] }
    },
    {
        name: 'Roran',
        image: roran_portrait,
        color: '#8B4513',
        wikiLink: 'https://inheritance.fandom.com/wiki/Roran',
        firstAppearance: { 1: EragonChapterList[2] }
    },
    {
        name: 'Brom',
        image: 'https://www.paolini.net/wp-content/uploads/2015/02/Brom-color-pnet.jpg',
        color: '#1E3A5F',
        wikiLink: 'https://inheritance.fandom.com/wiki/Brom',
        firstAppearance: { 1: EragonChapterList[3] }
    },
    {
        name: 'Arya',
        image: arya_portrait,
        color: '#228B22',
        wikiLink: 'https://inheritance.fandom.com/wiki/Arya',
        firstAppearance: { 1: EragonChapterList[40] }
    },
    {
        name: 'Nasuada',
        image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d13a6a12-43c3-4da4-8756-7fa6b2d0fdab/da82c0i-8473f9e9-7532-4c81-811f-45c7b241cac5.jpg/v1/fit/w_600,h_803,q_70,strp/nasuada_by_liberlibelula_da82c0i-375w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODAzIiwicGF0aCI6IlwvZlwvZDEzYTZhMTItNDNjMy00ZGE0LTg3NTYtN2ZhNmIyZDBmZGFiXC9kYTgyYzBpLTg0NzNmOWU5LTc1MzItNGM4MS04MTFmLTQ1YzdiMjQxY2FjNS5qcGciLCJ3aWR0aCI6Ijw9NjAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.vRBWZoZ2928HI9r06paggk84nR48b8Yku6jWqAXL4qM',
        color: '#7851A9',
        wikiLink: 'https://inheritance.fandom.com/wiki/Nasuada',
        firstAppearance: { 1: EragonChapterList[55] }
    },
    {
        name: 'Murtagh',
        image: murtagh_portrait,
        color: '#B22222',
        wikiLink: 'https://inheritance.fandom.com/wiki/Murtagh',
        firstAppearance: { 1: EragonChapterList[36] }
    }
];

enum CharacterIndex {
    'Eragon' = 0,
    'Roran',
    'Brom',
    'Arya',
    'Nasuada',
    'Murtagh'
}

export const books: Installment[] = [
    {
        title: 'Eragon',
        type: MediaType.Book,
        image: 'https://www.paolini.net/wp-content/uploads/2017/06/1.-Eragon-cvr-reduced-680x1024.jpg',
        chapters: EragonChapterList,
    },
    {
        title: 'Eldest',
        type: MediaType.Book,
        image: 'https://www.paolini.net/wp-content/uploads/2017/06/2.-Eldest-cvr-reduced-404x588.jpg',
        chapters: EldestChapterList,
    },
    {
        title: 'Brisingr',
        type: MediaType.Book,
        image: 'https://www.paolini.net/wp-content/uploads/2017/06/3.-Brisinger-cvr-reduced-404x588.jpg',
        chapters: BrisingrChapterList,
    },
    {
        title: 'Inheritance',
        type: MediaType.Book,
        image: 'https://www.paolini.net/wp-content/uploads/2017/06/4.-Inheritance-cvr-reduced-404x588.jpg',
        chapters: InheritanceChapterList,
    },
    {
        title: 'The Fork, the Witch, and the Worm',
        type: MediaType.Book,
        image: 'https://images4.penguinrandomhouse.com/cover/9781984894861',
        chapters: ForkWitchWormChapterList,
    },
    {
        title: 'Murtagh',
        type: MediaType.Book,
        image: 'https://www.paolini.net/wp-content/uploads/2023/03/Murtagh_%C2%A9-2023-by-John-Jude-Palencarreduced.png',
        chapters: MurtaghChapterList,
    }
];

export const seriesData: Series = {
    title: 'Inheritance Cycle',
    stub: 'inheritance-cycle',
    image: 'https://www.paolini.net/wp-content/uploads/2017/06/1.-Eragon-cvr-reduced-680x1024.jpg',
    description: 'The Inheritance Cycle is the core series of books following Eragon in his journey to become a Dragon Rider',
    color: '#4682B4',
    backgroundColor: '#12224d',
    installments: books,
    characters: characters
}

export const INHERITANCE_CYCLE_DATA: DataBundle = {
    ...seriesData,
    map: mapData,
    markers: [
        // Towns and Cities
        {
            title: 'Carvahall',
            coordinates: [1253, 866],
            type: 'town',
            image: 'https://preview.redd.it/ugfiosqv8er51.png?width=1080&crop=smart&auto=webp&s=11655ab379ee3fc0a0fd0f27ad840e4c787face7',
            appearances: {
                1: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map(i => EragonChapterList[i]),
                2: [3, 4, 10, 11, 14, 15].map(i => EldestChapterList[i])
            },
            description: 'Carvahall is a small village in the Spine, located in the northern part of Alagaësia. It is the birthplace of Eragon and Roran.',
            wikiLink: 'https://inheritance.fandom.com/wiki/Carvahall',
            confirmed: true
        },
        {
            title: 'Yazuac',
            coordinates: [1122, 887],
            type: 'town',
            image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/59984111-bdcf-46de-9823-7efe8dc6654f/d1822px-89c9657d-53dd-4da8-9e3c-205db1ecea84.jpg/v1/fit/w_600,h_800,q_70,strp/yazuac_by_vfire_d1822px-375w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODAwIiwicGF0aCI6IlwvZlwvNTk5ODQxMTEtYmRjZi00NmRlLTk4MjMtN2VmZThkYzY2NTRmXC9kMTgyMnB4LTg5Yzk2NTdkLTUzZGQtNGRhOC05ZTNjLTIwNWRiMWVjZWE4NC5qcGciLCJ3aWR0aCI6Ijw9NjAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.kpzHWB2T1i-_TZ9y6gvkVjrmG6_TWS2zhjUB0dZbzxk',
            appearances: {
                1: [18, 19].map(i => EragonChapterList[i])
            },
            description: 'Yazuac is a small village on the northern plains. It was completely wiped out by Urgals.',
            wikiLink: 'https://inheritance.fandom.com/wiki/Yazuac',
            confirmed: true
        },
        {
            title: 'Daret',
            coordinates: [1069, 861],
            type: 'town',
            appearances: {
                1: [21].map(i => EragonChapterList[i])
            },
            description: 'Daret is a village in Alagaësia that is west of the Ninor River and south of Yazuac.',
            wikiLink: 'https://inheritance.fandom.com/wiki/Daret',
            confirmed: true
        },
        {
            title: 'Teirm',
            coordinates: [911, 664],
            type: 'city',
            image: 'https://cdna.artstation.com/p/assets/images/images/021/412/608/large/attila-gerenyi-07.jpg?1571597667',
            appearances: {
                1: [25, 26, 27, 28].map(i => EragonChapterList[i])
            },
            description: 'Teirm was the Broddring Empire\'s primary port city. It is located in western Alagaësia, west of the Spine.',
            wikiLink: 'https://inheritance.fandom.com/wiki/Teirm',
            confirmed: true
        },
        {
            title: 'Dras-Leona',
            coordinates: [617, 839],
            type: 'city',
            image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/9a4348b1-8551-4a82-bf82-df42a6969c98/d7bznww-a64ff565-7d55-4f9b-a01b-12334831d83c.png/v1/fill/w_1145,h_698,q_70,strp/dras_leona__part_three__by_turnipstewdios_d7bznww-pre.jpg',
            appearances: {
                1: [32, 33, 34].map(i => EragonChapterList[i])
            },
            description: 'Dras-Leona is a city located on the eastern shores of Leona Lake. It is located close to and was home to the priests of the rock formation known as Helgrind',
            wikiLink: 'https://inheritance.fandom.com/wiki/Dras-Leona',
            confirmed: true
        },
        {
            title: 'Gil\'ead',
            coordinates: [999, 1074],
            type: 'city',
            image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/23d52755-ed7c-4529-86fb-a817fb58fa46/d2y36fc-c0ce1772-f935-47b7-9612-f9604821aa93.jpg/v1/fill/w_900,h_385,q_75,strp/gilead_prison_tower_gates_by_rusty001_d2y36fc-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9Mzg1IiwicGF0aCI6IlwvZlwvMjNkNTI3NTUtZWQ3Yy00NTI5LTg2ZmItYTgxN2ZiNThmYTQ2XC9kMnkzNmZjLWMwY2UxNzcyLWY5MzUtNDdiNy05NjEyLWY5NjA0ODIxYWE5My5qcGciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.lA-eJLiGUVDKsgLlbSE2OsNnEwmW4WHZ2oayV7SI5qE',
            appearances: {
                1: [39, 40, 41].map(i => EragonChapterList[i])
            },
            description: 'Gil\'ead is a city located in the northern part of Alagaësia. It was a fishing and trapping center, where hunters could replenish supplies and sell their pelts and meat before returning to the wild. It was also a major staging point for Galbatorix\'s Imperial Army with barracks, a fort, as well as some of the Broddring Empire\'s most secure prisons. ',
            wikiLink: 'https://inheritance.fandom.com/wiki/Gil%27ead',
            confirmed: true
        },
        {
            title: 'Tronjheim',
            coordinates: [222, 2182],
            type: 'city',
            image: 'https://cdna.artstation.com/p/assets/images/images/034/227/884/large/maxime-bocquier-maxime-bocquier-tronjheim-2-final.jpg?1611744960',
            appearances: {
                1: [50, 51, 52, 53, 54, 55, 56, 57, 59].map(i => EragonChapterList[i]),
                2: [0, 1, 2, 5, 6, 7, 8, 9].map(i => EldestChapterList[i]),
            },
            description: 'Tronjheim, called the City of Eternal Twilight by the Elves, was the capital city of the dwarves, located within Farthen Dûr. It is a city-mountain and took generations to build. "Tronjheim" meant "Helm of Giants" in the Dwarvish language.',
            wikiLink: 'https://inheritance.fandom.com/wiki/Farthen_D%C3%BBr',
            confirmed: true
        },
        {
            title: 'Tarnag',
            coordinates: [323, 2102],
            type: 'city',
            appearances: {
                2: [12, 13].map(i => EldestChapterList[i])
            },
            description: 'Tarnag was a dwarven city northwest of Farthen Dûr. It was built on a series of terraces carved out of the side of the mountain and was controlled by by Dûrgrimst Ragni Hefthyn.[1] It contained Celebdeil, the greatest temple in all of dwarfdom.',
            wikiLink: 'https://inheritance.fandom.com/wiki/Tarnag',
            confirmed: true
        },
        {
            title: 'Hedarth',
            coordinates: [629, 2480],
            type: 'town',
            appearances: {
                2: [18].map(i => EldestChapterList[i])
            },
            description: 'Hedarth was a dwarf trading post situated between Âz Ragni and the Edda River. It was also the most easterly known settlement in Alagaësia',
            wikiLink: 'https://inheritance.fandom.com/wiki/Hedarth',
            confirmed: true
        },
        // Points of Interest
        {
            title: 'Helgrind',
            coordinates: [597, 849],
            type: 'point of interest',
            image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1e3ce19f-ae6c-4e61-8b3a-6cd66091c797/d5kzkhq-dd86ed03-d818-453a-abd0-6d64e21d2c2e.jpg/v1/fill/w_1069,h_748,q_70,strp/eragon_helgrind_by_trinitydigitaldesign_d5kzkhq-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTEyMCIsInBhdGgiOiJcL2ZcLzFlM2NlMTlmLWFlNmMtNGU2MS04YjNhLTZjZDY2MDkxYzc5N1wvZDVremtocS1kZDg2ZWQwMy1kODE4LTQ1M2EtYWJkMC02ZDY0ZTIxZDJjMmUuanBnIiwid2lkdGgiOiI8PTE2MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.kIMx-7LsYCiuUTNeTCzkg3HtepGQ6YQfSVmZhrDXiFM',
            appearances: {
                1: [35].map(i => EragonChapterList[i])
            },
            description: 'Helgrind ("The Gates of Death" in the ancient language) is a four-peaked mountain near the city of Dras-Leona. It was an object of religious reverence to Dras-Leona\'s cult and was also the home of the Ra\'zac and the Lethrblaka.',
            wikiLink: 'https://inheritance.fandom.com/wiki/Helgrind',
            confirmed: true
        },
        {
            title: 'Brom\'s Tomb',
            coordinates: [556, 892],
            type: 'point of interest',
            image: 'https://preview.redd.it/2fxzbv9uxai91.jpg?width=963&format=pjpg&auto=webp&s=7a70978971fc3588e01f18bb4424c5ef3e5bfbf2',
            appearances: {
                1: [38].map(i => EragonChapterList[i])
            },
            description: 'After being killed by the Ra\'zac, Brom is buried in a tomb which Saphira turned to diamond in the hills south of Helgrind.',
            wikiLink: 'https://inheritance.fandom.com/wiki/Brom%27s_tomb',
            confirmed: true
        },
        // Events
        {
            title: 'Hatching of a dragon',
            coordinates: [1251, 843],
            type: 'event',
            image: 'https://pbs.twimg.com/media/BWjfAnrCcAAyA-H?format=jpg&name=900x900',
            appearances: {
                1: [4].map(i => EragonChapterList[i])
            },
            description: 'As Eragon sleeps the stone he found in the Spine begins to wobble and crack. From it hatches a small dragon.',
            wikiLink: 'https://inheritance.fandom.com/wiki/Saphira',
            confirmed: true
        },
        {
            title: 'Burning of Garrows Farm',
            coordinates: [1251, 833],
            type: 'event',
            image: 'https://cdnb.artstation.com/p/assets/images/images/065/902/589/large/aj-armstrong-eragon-garrows-farm2.jpg?1691521245',
            appearances: {
                1: [11].map(i => EragonChapterList[i])
            },
            description: 'After the Ra\'zac come to Carvahall in search of the dragon egg, they burn down the farm of the Garrow family.',
            wikiLink: 'https://inheritance.fandom.com/wiki/Garrow',
            confirmed: true
        },
        // Battles
        {
            title: 'Battle under Farthen Dûr',
            coordinates: [212, 2172],
            type: 'battle',
            image: 'https://www.artstation.com/artwork/BkmGrz',
            appearances: {
                1: [58].map(i => EragonChapterList[i])
            },
            description: 'The Battle under Farthen Dûr, also called the Battle of Tronjheim, was fought between the Varden and their Dwarven allies against Urgals in the service of the Broddring Empire. ',
            wikiLink: 'https://inheritance.fandom.com/wiki/Battle_under_Farthen_D%C3%BBr',
            confirmed:true
        }
    ],
    paths: [
        // Eragon
        {
            character: characters[CharacterIndex.Eragon],
            installment: books[0],
            chapter: EragonChapterList[1],
            confirmed: false,
            coordinates: [
                [1273, 856],
                [1251, 843]
            ]
        },
        {
            character: characters[CharacterIndex.Eragon],
            installment: books[0],
            chapter: EragonChapterList[10],
            confirmed: false,
            coordinates: [
                [1251, 843],
                [1273, 856]
            ]
        },
        {
            character: characters[CharacterIndex.Eragon],
            installment: books[0],
            chapter: EragonChapterList[11],
            confirmed: false,
            coordinates: [
                [1273, 856],
                [1251, 843],
                [1253, 866]
            ]
        },
        {
            character: characters[CharacterIndex.Eragon],
            installment: books[0],
            chapter: EragonChapterList[14],
            confirmed: false,
            coordinates: [
                [1253, 866],
                [1234, 863]
            ]
        },
        {
            character: characters[CharacterIndex.Eragon],
            installment: books[0],
            chapter: EragonChapterList[16],
            confirmed: true,
            coordinates: [
                [1234, 863],
                [1216, 831],
                [1190, 846],
                [1172, 847]
            ]
        },
        {
            character: characters[CharacterIndex.Eragon],
            installment: books[0],
            chapter: EragonChapterList[17],
            confirmed: true,
            coordinates: [
                [1172, 847],
                [1147, 868]
            ]
        },
        {
            character: characters[CharacterIndex.Eragon],
            installment: books[0],
            chapter: EragonChapterList[18],
            confirmed: true,
            coordinates: [
                [1147, 868],
                [1122, 887]
            ]
        },
        {
            character: characters[CharacterIndex.Eragon],
            installment: books[0],
            chapter: EragonChapterList[20],
            confirmed: true,
            coordinates: [
                [1122, 887],
                [1106, 867]
            ]
        },
        {
            character: characters[CharacterIndex.Eragon],
            installment: books[0],
            chapter: EragonChapterList[21],
            confirmed: true,
            coordinates: [
                [1106, 867],
                [1097, 868],
                [1088, 872],
                [1069, 861]
            ]
        },
        {
            character: characters[CharacterIndex.Eragon],
            installment: books[0],
            chapter: EragonChapterList[22],
            confirmed: true,
            coordinates: [
                [1069, 861],
                [1005, 814]
            ]
        },
        {
            character: characters[CharacterIndex.Eragon],
            installment: books[0],
            chapter: EragonChapterList[23],
            confirmed: true,
            coordinates: [
                [1005, 814],
                [963, 804],
                [933, 805],
                [895, 804],
                [868, 831],
                [842, 842],
                [816, 827],
                [816, 800],
                [817, 760]
            ]
        },
        {
            character: characters[CharacterIndex.Eragon],
            installment: books[0],
            chapter: EragonChapterList[24],
            confirmed: true,
            coordinates: [
                [817, 760],
                [828, 730],
                [842, 709],
                [856, 696],
                [867, 690],
                [872, 686],
                [880, 676],
                [887, 665]
            ]
        },
        {
            character: characters[CharacterIndex.Eragon],
            installment: books[0],
            chapter: EragonChapterList[25],
            confirmed: true,
            coordinates:[
                [887, 665],
                [911, 664]
            ]
        },
        {
            character: characters[CharacterIndex.Eragon],
            installment: books[0],
            chapter: EragonChapterList[29],
            confirmed: true,
            coordinates: [
                [911, 664],
                [882, 666],
                [872, 674],
                [866, 683],
                [855, 686],
                [839, 703],
                [822, 735],
                [811, 768],
                [805, 805],
                [803, 829],
                [804, 854],
                [796, 873]
            ]
        },
        {
            character: characters[CharacterIndex.Eragon],
            installment: books[0],
            chapter: EragonChapterList[31],
            confirmed: true,
            coordinates: [
                [796, 873],
                [780, 866],
                [769, 865],
                [758, 854],
                [749, 845]
            ]
        },
        {
            character: characters[CharacterIndex.Eragon],
            installment: books[0],
            chapter: EragonChapterList[32],
            confirmed: true,
            coordinates: [
                [749, 845],
                [746, 833],
                [737, 831],
                [731, 831],
                [720, 841],
                [709, 852],
                [701, 860],
                [696, 862],
                [691, 858],
                [682, 855],
                [671, 849],
                [669, 843],
                [664, 824],
                [664, 824],
                [655, 823],
                [649, 822],
                [643, 826],
                [638, 825],
                [632, 830],
                [617, 839]
            ]
        },
        {
            character: characters[CharacterIndex.Eragon],
            installment: books[0],
            chapter: EragonChapterList[35],
            confirmed: true,
            coordinates: [
                [617, 839],
                [597, 849]
            ]
        },
        {
            character: characters[CharacterIndex.Eragon],
            installment: books[0],
            chapter: EragonChapterList[36],
            confirmed: false,
            coordinates: [
                [597, 849],
                [567, 851]
            ]
        },
        {
            character: characters[CharacterIndex.Eragon],
            installment: books[0],
            chapter: EragonChapterList[36],
            confirmed: true,
            coordinates: [
                [567, 851],
                [556, 892]
            ]
        },
        {
            character: characters[CharacterIndex.Eragon],
            installment: books[0],
            chapter: EragonChapterList[39],
            confirmed: true,
            coordinates: [
                [556, 892],
                [592, 945],
                [660, 989],
                [689, 1007],
                [768, 1036],
                [849, 1045],
                [931, 1061],
                [999, 1074]
            ]
        },
        {
            character: characters[CharacterIndex.Eragon],
            installment: books[0],
            chapter: EragonChapterList[42],
            confirmed: true,
            coordinates: [
                [999, 1074],
                [991, 1089],
                [985, 1094],
                [971, 1092],
                [957, 1100],
                [949, 1114],
                [944, 1121]
            ]
        },
        {
            character: characters[CharacterIndex.Eragon],
            installment: books[0],
            chapter: EragonChapterList[43],
            confirmed: true,
            coordinates: [
                [944, 1121],
                [932, 1125],
                [918, 1131],
                [896, 1136],
                [879, 1138],
                [870, 1148],
                [861, 1154],
                [843, 1157],
                [828, 1168],
                [818, 1187],
                [793, 1206],
                [784, 1219],
                [772, 1230],
                [756, 1233],
                [743, 1231],
            ]
        },
        {
            character: characters[CharacterIndex.Eragon],
            installment: books[0],
            chapter: EragonChapterList[44],
            confirmed: true,
            coordinates: [
                [743, 1231],
                [731, 1234],
                [721, 1237],
                [721, 1237],
                [711, 1244]
            ]
        },
        {
            character: characters[CharacterIndex.Eragon],
            installment: books[0],
            chapter: EragonChapterList[45],
            confirmed: true,
            coordinates: [
                [711, 1244],
                [573, 1303],
                [496, 1389],
                [404, 1469],
                [367, 1510],
            ]
        },
        {
            character: characters[CharacterIndex.Eragon],
            installment: books[0],
            chapter: EragonChapterList[46],
            confirmed: true,
            coordinates: [
                [367, 1510],
                [399, 1574],
            ]
        },
        {
            character: characters[CharacterIndex.Eragon],
            installment: books[0],
            chapter: EragonChapterList[47],
            confirmed: true,
            coordinates: [
                [399, 1574],
                [447, 1622],
                [450, 1675]
            ]
        },
        {
            character: characters[CharacterIndex.Eragon],
            installment: books[0],
            chapter: EragonChapterList[48],
            confirmed: true,
            coordinates: [
                [450, 1675],
                [420, 1698],
                [400, 1705],
                [387, 1722],
                [364, 1727],
                [340, 1734],
                [316, 1741],
                [295, 1754],
                [276, 1767],
            ]
        },
        {
            character: characters[CharacterIndex.Eragon],
            installment: books[0],
            chapter: EragonChapterList[49],
            confirmed: true,
            coordinates: [
                [276, 1767],
                [247, 1771],
                [221, 1781],
                [201, 1792],
                [191, 1821],
                [187, 1843],
                [194, 1874],
                [197, 1894],
                [201, 1919],
                [203, 1935],
            ]
        },
        {
            character: characters[CharacterIndex.Eragon],
            installment: books[0],
            chapter: EragonChapterList[50],
            confirmed: true,
            coordinates: [
                [203, 1935],
                [222, 2182],
            ]
        },
        {
            character: characters[CharacterIndex.Eragon],
            installment: books[1],
            chapter: EldestChapterList[12],
            confirmed: true,
            coordinates: [
                [222, 2182],
                [267, 2109],
                [302, 2081],
                [323, 2102]
            ]
        },
        {
            character: characters[CharacterIndex.Eragon],
            installment: books[1],
            chapter: EldestChapterList[16],
            confirmed: true,
            coordinates: [
                [323, 2102],
                [331, 2119],
                [332, 2137],
                [341, 2143],
                [348, 2144],
                [351, 2148],
                [351, 2154],
                [356, 2157],
                [359, 2149],
                [362, 2144],
                [366, 2139],
                [368, 2133],
                [368, 2131],
                [371, 2126],
                [376, 2124],
                [382, 2124],
                [385, 2123],
                [389, 2126],
                [400, 2127],
                [406, 2132],
                [409, 2134],
                [419, 2134],
                [424, 2139],
                [429, 2142],
                [434, 2152],
                [435, 2156],
                [441, 2162],
                [443, 2169],
                [448, 2179],
                [455, 2183],
                [457, 2191],
                [457, 2200],
                [454, 2207],
                [454, 2212],
                [454, 2222],
                [456, 2227],
                [457, 2235],
                [453, 2243],
                [450, 2250],
                [444, 2256],
                [441, 2264],
                [441, 2269],
                [443, 2275],
                [444, 2279],
                [443, 2283],
                [445, 2288],
                [448, 2289],
                [453, 2293],
                [459, 2295],
                [467, 2295],
                [473, 2293],
                [476, 2292],
                [482, 2292],
                [493, 2292],
                [500, 2292],
                [504, 2293],
                [510, 2294],
                [517, 2291],
                [524, 2291],
                [534, 2290],
                [539, 2288],
                [546, 2285],
                [555, 2285],
            ]
        },
        {
            character: characters[CharacterIndex.Eragon],
            installment: books[1],
            chapter: EldestChapterList[17],
            confirmed: true,
            coordinates: [
                [555, 2285],
                [564, 2281],
                [566, 2278],
                [569, 2274],
                [574, 2275],
                [579, 2273],
                [583, 2273],
                [585, 2278],
                [583, 2282],
                [578, 2287],
                [576, 2291],
                [574, 2297],
                [574, 2303],
                [577, 2305],
                [579, 2310],
                [580, 2316],
                [582, 2317],
                [586, 2319],
                [589, 2320],
                [592, 2324],
                [597, 2325],
                [603, 2323],
                [609, 2320],
                [612, 2319],
                [616, 2318],
                [620, 2320],
                [623, 2324],
                [626, 2326],
                [629, 2327],
                [632, 2325],
                [635, 2321],
                [638, 2318],
                [642, 2318],
                [646, 2318],
                [647, 2321],
                [647, 2326],
                [648, 2330],
                [651, 2332],
                [653, 2333],
                [653, 2336],
                [654, 2339],
                [657, 2342],
                [661, 2344],
                [662, 2349],
                [660, 2352],
                [656, 2355],
                [651, 2354],
                [646, 2354],
                [642, 2355],
                [638, 2356],
                [637, 2362],
                [633, 2367],
                [630, 2372],
                [628, 2375],
            ]
        },
        {
            character: characters[CharacterIndex.Eragon],
            installment: books[1],
            chapter: EldestChapterList[18],
            confirmed: true,
            coordinates: [
                [628, 2375],
                [623, 2380],
                [623, 2385],
                [623, 2392],
                [625, 2399],
                [624, 2404],
                [622, 2408],
                [624, 2410],
                [626, 2416],
                [624, 2420],
                [622, 2424],
                [620, 2429],
                [620, 2433],
                [622, 2435],
                [624, 2438],
                [623, 2441],
                [621, 2446],
                [617, 2448],
                [614, 2453],
                [613, 2457],
                [612, 2462],
                [612, 2468],
                [612, 2472],
                [615, 2476],
                [617, 2478],
                [620, 2482],
                [622, 2484],
                [629, 2480],
                [640, 2475],
                [644, 2466],
                [643, 2446],
                [644, 2429],
                [646, 2425],
                [643, 2416],
                [645, 2407],
                [655, 2399],
                [661, 2395],
                [660, 2386],
                [665, 2380],
                [668, 2373],
                [674, 2373],
                [682, 2376],
                [689, 2379],
                [693, 2379],
                [700, 2382],
                [705, 2386],
                [712, 2380],
                [719, 2378],
                [726, 2380],
                [733, 2380],
                [740, 2378],
            ]
        },
        {
            character: characters[CharacterIndex.Eragon],
            installment: books[1],
            chapter: EldestChapterList[19],
            confirmed: true,
            coordinates: [
                [740, 2378],
                [748, 2382],
                [755, 2386],
                [759, 2395],
                [761, 2399],
                [761, 2408],
                [759, 2410],
                [764, 2414],
                [771, 2416],
                [774, 2424],
                [775, 2432],
                [772, 2439],
                [768, 2443],
                [766, 2450],
                [766, 2454],
                [770, 2459],
                [772, 2465],
                [773, 2472],
                [775, 2479],
                [781, 2479],
                [787, 2478],
                [791, 2481],
                [795, 2479],
                [798, 2471],
                [802, 2466],
                [804, 2463],
                [805, 2454],
                [806, 2449],
                [810, 2445],
                [813, 2443],
                [818, 2436],
                [824, 2431],
                [828, 2429],
                [833, 2419],
                [839, 2415],
                [845, 2412],
                [847, 2407],
                [852, 2401],
            ]
        }
        // Roran
    ],
};

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

const eragon_portrait = require('../assets/eragon_portrait.tiff');
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
        firstAppearance: { 1: EragonChapterList[0] }
    },
    {
        name: 'Nasuada',
        image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d13a6a12-43c3-4da4-8756-7fa6b2d0fdab/da82c0i-8473f9e9-7532-4c81-811f-45c7b241cac5.jpg/v1/fit/w_600,h_803,q_70,strp/nasuada_by_liberlibelula_da82c0i-375w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODAzIiwicGF0aCI6IlwvZlwvZDEzYTZhMTItNDNjMy00ZGE0LTg3NTYtN2ZhNmIyZDBmZGFiXC9kYTgyYzBpLTg0NzNmOWU5LTc1MzItNGM4MS04MTFmLTQ1YzdiMjQxY2FjNS5qcGciLCJ3aWR0aCI6Ijw9NjAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.vRBWZoZ2928HI9r06paggk84nR48b8Yku6jWqAXL4qM',
        color: '#7851A9',
        wikiLink: 'https://inheritance.fandom.com/wiki/Nasuada',
        firstAppearance: { 1: EragonChapterList[1] }
    },
    {
        name: 'Murtagh',
        image: murtagh_portrait,
        color: '#B22222',
        wikiLink: 'https://inheritance.fandom.com/wiki/Murtagh',
        firstAppearance: { 1: EragonChapterList[1] }
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
        // Places
        {
            title: 'Carvahall',
            coordinates: [1253, 866],
            type: 'town',
            image: 'https://preview.redd.it/ugfiosqv8er51.png?width=1080&crop=smart&auto=webp&s=11655ab379ee3fc0a0fd0f27ad840e4c787face7',
            appearances: {
                1: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map(i => EragonChapterList[i]),
                2: [1].map(i => EldestChapterList[i]),
                3: [1].map(i => BrisingrChapterList[i]),
                4: [1].map(i => InheritanceChapterList[i]),
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
        }
    ],
    paths: [
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
            chapter: EragonChapterList[33],
            confirmed: true,
            coordinates: [

            ]
        }
    ],
};

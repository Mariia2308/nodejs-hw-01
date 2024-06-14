import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const countContacts = async () => {
    try {
        const data = await fs.readFile(PATH_DB, 'utf8');
        let contacts = JSON.parse(data);
        let length = contacts.length;

        console.log('Кількість контактів:', length);
    } catch (error) {
        console.error('Помилка читання файлу:', error);
    }
};

console.log(await countContacts());
import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const getAllContacts = async () => {
    try {
        const data = await fs.readFile(PATH_DB, 'utf8');
        let contacts = JSON.parse(data);

        console.log('Вміст файлу:', contacts);
    } catch (error) {
        console.error('Помилка читання файлу:', error);
    }
};

console.log(await getAllContacts());
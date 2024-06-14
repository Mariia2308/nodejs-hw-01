import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeAllContacts = async () => {
    try {
        const emptyContactsArray = [];

        await fs.writeFile(PATH_DB, JSON.stringify(emptyContactsArray, null, 2), 'utf-8');

        console.log('Усі контакти успішно видалено з бази даних.');
    } catch (error) {
        console.error('Помилка під час видалення контактів:', error);
    }
};

await removeAllContacts();
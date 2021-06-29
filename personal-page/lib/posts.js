import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const posts = path.join( process.cwd(), 'posts' );

export function getPostForDate() {
    const fileName = fs.readdirSync( posts );
    const fileData = fileName.map( file => {

        const id = file.replace( /\.md$/, '' );
        const filePath = path.join( posts, file );
        const fileContent = fs.readFileSync( filePath, 'utf8' );
        const matterFormat = matter( fileContent );

        return{
            id,
            ...matterFormat.data
        };

    });

    return fileData.sort( (a, b) => {
        if(a.date < b.date) {
            return 1
        } else {
            return -1
        };
    });
};

export function getAllId() {
    const fileName = fs.readdirSync(posts);

    return fileName.map(file => {
        return {
            params: {
                id: file.replace(/\.md$/, '')
            }
        }
    })
}
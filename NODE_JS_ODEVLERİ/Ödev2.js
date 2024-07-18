const posts = [
    {name:"Ahmet" , post:"Merhaba benim adim Ahmet."},
    {name:"Ayşe" , post:"Merhaba benim adim Ayşe."},
    {name:"Fatma" , post:"Merhaba benim adim Fatma."},
];

const listPosts = () => {
    posts.map((post) =>{ 
        console.log("Author:",post.name ," ", "Post:", post.post)});
}

function addPost (newPost)  {
    return new Promise((resolve , reject) => { // promise dönüyoruz.
        console.log("Veriler alınmaya çalışılıyor..");

        if(newPost) {
            posts.push(newPost);
            resolve("Verilen alındı.");
        } else {
            reject("Veriler alınamadı");
        }
    });
}

async function add_list_posts(){
    try{
        const receivedPost = await addPost ({name:"Kayra" , post:"Merhaba benim adim Kayra."});
        console.log("Eklenen veri:" , receivedPost);
        console.log("Ynei liste:");
        listPosts();
    }catch(error) {
        console.log(error);
    }
}

add_list_posts();
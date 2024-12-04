export interface Post {
    id: string;
    imageUrl: string;  
    title?: string;    
    caption?: string; 
    createdOn: string; 
    modifiedOn: string; 
    likeCount: number; 
    userId: string;  
    user: User;     
    comments: Comment[];
  }

  export interface User {
    id: string;
    username: string;
    profileImgUrl: string;
    posts: Post[];
    comments: Comment[];
  }

  export interface Comment {
    id: string;
    content: string;
    createdOn: string;
    userId: string;
    postId: string;
  }
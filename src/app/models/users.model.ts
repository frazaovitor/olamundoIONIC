export interface User {
  id: number;
  name: string;
  email: string;
  avatar: string;
  status: number;
  date: Date;
}


// o que esperar do response da listagem de usuários
export interface ResponseUsers{
    status: string;
    result: User[];
}

// o que esperar do response da listagem de apenas 1 usuário
export interface ResponseUser{
  status: string;
  result: User[];
}

// o que esperar do response de delete

export interface ResponseDelUser{
status: string;
result: string;
}

// o que esperar do response de post

export interface ResponsePostUser{
status: string;
result: string;
}

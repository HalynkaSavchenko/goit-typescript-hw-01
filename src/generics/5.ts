export enum UserRole {
    admin = 'admin',
    editor = 'editor',
    guest = 'guest',
  }
  
  type RoleUser = Record<UserRole, string>
  
  const RoleDescription: RoleUser = {
    admin: 'Admin User',
    editor: 'Editor User',
    guest: 'Guest User',
  };
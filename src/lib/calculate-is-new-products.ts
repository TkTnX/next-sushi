export const calculateIsNewProducts = (createdAt?: Date) => { 
      const currentDate = new Date();
      const createdAtDate = createdAt ? new Date(createdAt) : new Date(0);
      const daysDiff = Math.ceil(
        (currentDate.getTime() - createdAtDate.getTime()) /
          (1000 * 60 * 60 * 24)
      );

    return daysDiff < 7
}
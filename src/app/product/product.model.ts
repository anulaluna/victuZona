export class Product {
  public id?: number;
  public name?: string;
  public categoryId?: number;
  public imagePath?: string;
  public calories?: number;
  public protein?: number;
  public carbs?: number;
  public suger?: number;
  public fat?: number;
  public proteinBlock?: number;
  public fatBlock?: number;
  public carbsBlock?: number;
  constructor(
    id?: number,
    name?: string,
    categoryId?: number,
    imagePath?: string,
    calories?: number,
    protein?: number,
    carbs?: number,
    suger?: number,
    fat?: number
  ) {
    this.id = id;
    this.name = name;
    this.categoryId = categoryId;
    this.imagePath = imagePath;
    this.calories = calories;
    this.protein = protein;
    this.suger = suger;
    this.fat = fat;
    this.carbs = carbs;
    this.fatBlock = this.setBlock(fat, block.fat);
    this.carbsBlock = this.setBlock(carbs, block.carbs);
    this.proteinBlock = this.setBlock(protein, block.protein);
  }
  setBlock(value: number, blockZone: number): number {
      if (value > 0) {
    return blockZone / value;
      } else {
          return 0;
      }
  }
}
const block = {
  fat: 300,
  carbs: 900,
  protein: 700
};

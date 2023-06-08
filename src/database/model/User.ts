import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity({
  name: "users",
})
export class User {
  @PrimaryColumn("uuid")
  public id!: string;

  @Column("varchar", {
    length: 100,
    nullable: false,
  })
  public name!: string;

  @Column("varchar", {
    unique: true,
    nullable: false,
    length: 100,
  })
  public email!: string;

  @Column("varchar", {
    nullable: false,
    length: 255,
    select: false,
  })
  public password!: string;

  @Column("boolean", {
    nullable: false,
  })
  public terms!: boolean;
}

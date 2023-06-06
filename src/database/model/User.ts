import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryColumn("uuid")
  public id!: String;

  @Column("varchar", {
    length: 100,
    nullable: false,
  })
  public name!: String;

  @Column("varchar", {
    unique: true,
    nullable: false,
    length: 100,
  })
  public email!: String;

  @Column("varchar", {
    nullable: false,
    length: 20,
    select: false,
  })
  public password!: String;

  @Column("boolean", {
    nullable: false,
  })
  public terms!: Boolean;
}

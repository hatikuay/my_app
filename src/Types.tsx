export type StringOrNull = string | null;

export interface IPersonState {
    FirstName: string,
    LastName: string,
    Address1: string,
    Address2: StringOrNull,
    Town: string,
    Country: string,
    PhoneNumber: string;
    Postcode: string,
    DateOfBirth: StringOrNull,
    PersonId: string
}

export interface IProps {
    DefaultState: IPersonState
}

export interface ITableBuilder {
    WithDatabase(databaseName: string): ITableBuilder;
    WithVersion(version: number): ITableBuilder;
    WithTableName(tableName: string): ITableBuilder;
    WithPrimaryField(primaryField: string): ITableBuilder;
    WithIndexName(indexName: string): ITableBuilder;
}

export interface ITable {
    Database(): string;
    Version(): number;
    TableName(): string;
    IndexName(): string;
    Build(database: IDBDatabase): void;
}

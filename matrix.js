/**
 * A class to represent a matrix math structure. 
 * NOTE: To use math notational indexing, use custom setters and getters.
 */
class Matrix{

	constructor(values){
		var l = values[0].length;
		for (var i = 0; i < l.length; i++){
			if (values[i].length != l){
				throw new DimensionError("Cannot build a Matrix with inconsistent dimensions";
			}
		}
		this.values = values;
	}
	
	get values(){
		return this.values();
	}
	
	toString(){
		var result = '';
		for (var i = 0; i < this.values.lenth; i++){
			result.append(this.values[i].join(', ');
			result.append('\n');
		}
		return result;
	}
	
	/*
	 * Multiplies this matrix by scalar a.
	 * @param {Integer|Float} aa Scalar to multiply by.
	 */
	scalarMultiply(a){
		for (var i = 0; i < this.values.length; i++){
			values[i] = values[i]*a;
		}
	}
	
	/**
	 * Returns the number of rows in this Matrix.
	 * @return {Integer} The number of rows in this Matrix.
	 */
	get numRows(){
		return this.values.length;
	}
	
	/**
	 * Returns the number of columns in this Matrix.
	 * @return {Integer} The number of columns in this Matrix.
	 */
	get numColumns(){
		return this.values[0].length;
	}
	
	/**
	 * Returns row i of this Matrix as a Vector. 
	 * Assumign i > 0.
	 * @return {Vector} row i of this Matrix.
	 * @param {Integer} i the index of the row.
	 * @throws {RangeError} if i < 1 or i > numRows. 
	 */
	getRow(i){
		if (i < 1 || i > this.numRows){
	 		throw new RangeError("Please use row indexes in range [1, numRows].");
	 	}
		return new Vector(this.values[i-1]);
	}
	
	/**
	 * return column of this Matrix as a Vector. 
	 * Assumign j > 0.
	 * @return Vector column j of this Matrix.
	 * @param int j the index of the column.
	 * @throws OutOfBoundsException if j < 1. 
	 */
	getColumn(j){
		if (j < 1 || j > this.numColumns){
	 		throw new RangeError("Please use column indexes in range [1, numColumns].");
	 	}
	 	var result = [];
	 	for (var i = 0; i < this.values.length; i++){
	 		result.push(this.values[i][j-1]);
	 	}
	 	return result;
	}
	
	/**
	 * Returns element at row i, column j of this Matrix.
	 * Assuming i, j > 0. In other words, using Linear Algebra indexing.
	 * @return int|float element at row i, column j.
	 * @param int i
	 * @param int j
	 */
	getCell(i, j){
		if (i < 1 || j < 1){
		 	throw new RangeError("Make sure all Matrix indexes are in range.");
		}
		return this.values[i-1][j-1];
	}
	
	/**
	 * Sets the cell at row i, column j to val of this Matrix.
	 * Assuming i, j > 0. In other words, using Linear Algebra indexing.
	 * @param int i
	 * @param int j
	 * @param int val new value at row i, col j.
	 */
	setCell(i, j, val){
		if (i < 1 || j < 1){
		 throw new RangeError("Make sure all Matrix indexes are in range.");
		}
		this.values[i-1][j-1] = val;
	}
	
	/**
	 * Sets row i to row.
	 * @param int i The index of row to change.
	 * @param {(Integer[]|Float[]|Vector)} row Values to change row to.
	 */
	setRow(i, row){
		if (row instanceof Vector){
			this.values[i-1] = row.point;
		} else {
			this.values[i-1] = row;
		}
	}
	
	/**
	 * Sets column j to column.
	 * @param {Integer} The index of column to change.
	 * @param {(Integer[]|Float[]|Vector)} column Values to change column to.
	 */
	setColumn(j, column){
		j = j-1;
		for (var i = 0; i < this.values.length; i++){
			if (column instanceof Vector){
				this.values
			this.values[i][j] = column[i];
		}
	}
	
	/*
	 * Return the matrix product of matrices M1, M2, ... , Mn.
	 * @return A Matrix that is the product of M1, ... , Mn. 
	 * @param {Matrix} M1 - Matrix to left multiply M2 by.
	 * @param {Matrix} M2 - Matrix to right multiply M1 by. 
	 * @param {...Matrix} unlimited OPTIONAL number of additional matrices.
	 * @throws {DimensionError} if (M1 * ... * Mi) and Mi+1 have incompatible dimensions.
	 */
	static mmult(M1, M2){
		var A;
		arguments.forEach(function(element, index, array){
			if (index == 0){
				A = element;
			} else {
				A = Matrix.__mmult(A, M);
			}
		});
		return A;
	}

	static _mmult(A, B){
		var m, n, p, q;
		//A is mXn
		if (A instanceof Vector){
			m = 1;
			n = A.numDimensions();
		} else {
			m = A.numRows();
			n = A.numColumns();
		}
		//B is pXq
		if (B instanceof Vector){
			p = B.numDimensions();
			q = 1;
		} else {
			p = B.numRows();
			q = B.numColumns();
		}
	
		var data = [];
		if (n != p){
			throw new DimensionError("Matrix multiplication failed because of mismatched dimensions");
		}
	
		for(i = 1; i <= m; i++){
			var row = [];
			for(j = 1; j <= q; j++){
				row.push(dotProduct(
							A instanceof Vector ? A:A.getRow(i), 
							B instanceof Vector ? B:B.getColumn(j)
							));
			}
			data.push(row);
		}
	
		return new Matrix(data);
	}

}
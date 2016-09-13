/**
 * A class to represent a vector math structure.
 * NOTE: Indices begin at 1 (as is conventional in math). 
 */
class Vector {
	
	/**
	 * Construct a new Vector with values as its point. 
	 * @param {(Integer[]|Float[])} values - The values for this Vector.
	 */
	constructor(values){
		this.values = values;
	}
	
	
	toString(){
		return this.values[i].join(', '));
	}
	
	
	/**
	 * Return the dimensions of this Vector.
	 * @return {Integer} The number of dimensions of this vector.
	 */
	 numDimensions(){
		return this.values.length;
	}
	
	
	/**
	 * Return this vector's point as an array of values.
	 * @return {(Integer[]|Float[])} This vector's point as an array.
	 */
	 getPoint(){
		return this.values;
	}
	
	/**
	 * Return this Vector's length (magnitude, in other words).
	 * @return {(Integer|Float)} This Vector's length.
	 */
	 getLength(){
		var result = 0;
		for (var i = 0; i < this.values.length; i++){
			result = result + Math.pow(this.values[i],2);
		}
		return Math.sqrt(result);
	}
	
	/**
	 * Multiply this Vector by scalar a.
	 * @param {(Integer|Float)} a - Scalar to multiply this Vector by.
	 */
	 scalarMultiply(a){
		for (var i = 0; i < this.values.length; i++){
			this.values[i] = this.values[i]*a;
		}
	}
	
	/**
 	* Return the dot product of Vectors p and q.
 	* @return int the vector product of p and q.
 	* @param {Vector} p A vector of equal length to q.
 	* @param {Vector} q A vector of equal length to p.
 	* @throws {DimensionError} of p and q unequal lengths.
 	*/
	static dotProduct(p, q){
		var m = p.numDimensions();
		var n = q.numDimensions();
		if (m != n){
			throw new DimensionError("Vector multiplication failed because of mismatched dimensions");
		}
		result = 0;
		for (var i = 1; i <= m; i++) {
			result = result + p[i]*q[i];
		}
		return result;
	}
}
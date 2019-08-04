import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Set;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
@SuppressWarnings("unused")
public class Hello {
	
	public static double Calculator(String  operator, double first, double second) {
		 double result = 0;
		 switch(operator)
	        {
	            case "+":
	                result = first + second;
	                break;
	            case "-":
	                result = first - second;
	                break;
	            case "*":
	                result = first * second;
	                break;
	            case "/":
	                result = first / second;
	                break;
	            // operator doesn't match any case constant (+, -, *, /)
	            default:
	                System.out.printf("Error! operator is not correct");
	        }
		 return result;
	}

	public static BigDecimal CalculatorBig(String  operator, BigDecimal first, BigDecimal second) {
		BigDecimal result = null;
		 switch(operator)
	        {
	            case "+":
	                result = first.add(second);
	                break;
	            case "-":
	                result = first.subtract(second);
	                break;
	            case "*":
	                result = first.multiply(second);
	                break;
	            case "/":
	                result = first.divide(second,BigDecimal.ROUND_HALF_UP,0);
	                break;
	            // operator doesn't match any case constant (+, -, *, /)
	            default:
	                System.out.printf("Error! operator is not correct");
	        }
		 return result;
	}
	public static void calOpera() {
		List<HashMap<String, String>> capitalCities = null;
		
		List<Object> list=new ArrayList<Object>();  
		HashMap<String,Integer> hm=new HashMap<String,Integer>();
		HashMap<String,Integer> hi=new HashMap<String,Integer>();
		HashMap<String,Integer> ha=new HashMap<String,Integer>();
		HashMap<String,Integer> hu=new HashMap<String,Integer>();
		HashMap<String,Integer> hl=new HashMap<String,Integer>();
	    hm.put("Hau",5);
	    hm.put("Phuongc",5);
	    hm.put("Hien",7);
	    hm.put("Phuong",5);
	    hm.put("Col",4);

	    hi.put("Hau",6);
	    hi.put("Phuongc",5);
	    hi.put("Hien",3);
	    hi.put("Phuong",7);
	    hi.put("Col",8);
	    
	    ha.put("Hau",9);
	    ha.put("Phuongc",4);
	    ha.put("Hien",6);
	    ha.put("Phuong",3);
	    ha.put("Col",6);
	    
	    hu.put("Hau",2);
	    hu.put("Phuongc",4);
	    hu.put("Hien",8);
	    hu.put("Phuong",2);
	    hu.put("Col",6);
	    
	    hl.put("Hau",5);
	    hl.put("Phuongc",4);
	    hl.put("Hien",4);
	    hl.put("Phuong",6);
	    hl.put("Col",6);
	    list.add(hm);
	    list.add(hi);
	    list.add(ha);
	    list.add(hu);
	    list.add(hl);
	 //-------------------------------------------------------------   
	    
	    List<Object> rowselect=new ArrayList<Object>();  
		HashMap<String,String> h1=new HashMap<String,String>();
		HashMap<String,String> h2=new HashMap<String,String>();
		HashMap<String,String> h3=new HashMap<String,String>();
		HashMap<String,Object> h4=new HashMap<String,Object>();
		HashMap<String,Object> h5=new HashMap<String,Object>();
		String[] opr = {"/","*"};
		String[] op = {"*","/"};
		String[] target = {"Hien","Hau","Phuong"};
		String[] target2 = {"Hien","Hau","Phuongc"};
	    h1.put("id","col");
	    h1.put("isModel","true");
	    
	    h2.put("id","Hau");
	    h2.put("isModel","true"); 
	    
	    h3.put("id","Hien");
	    h3.put("isModel","true");
	    
	    h4.put("id","demo");
	    h4.put("isModel","false");
	    h4.put("operator",opr);
	    h4.put("targetField",target);
	   
	  /*  h5.put("id","Minh");
	    h5.put("isModel","false");
	    h5.put("operator",opr);
	    h5.put("targetField",target2);*/
	    rowselect.add(h1);
	    rowselect.add(h2);
	    rowselect.add(h3);
	    rowselect.add(h4);
	   // rowselect.add(h5); 
		System.out.println(list);
		double rs = 0;
		
	//	System.out.println(rowselect);
		for(int i = 0; i<rowselect.size(); i++ ) {
			Map<String, Object> map1 = (Map<String, Object>) rowselect.get(i);
			//String[] arrTargetField = map1.get("targetField");
			if(map1.get("isModel")=="false") {
			
				String[] arrTarget   = (String[]) map1.get("targetField");
				String[] arrOperator = (String[]) map1.get("operator");
				String idTarget =(String) map1.get("id");
				for(int j = 0; j < list.size(); j++) { 
					Map<String, Integer> getRs = (Map<String, Integer>) list.get(j);// get tung object ra
					int iii;
					double tong = 0;
					//for(ii = 0; ii< arrTarget.length;ii++) {// xy ly lay tartget trong object
						// caculation 
					//for(iii = 0; iii< arrOperator.length; iii++) {
					int indexOfOp0 = Arrays.asList(op).indexOf( arrOperator[0]);
					int indexOfOp = Arrays.asList(op).indexOf( arrOperator[1]);
					
					if(indexOfOp0 <0 && indexOfOp >0 ) {
						rs =    Calculator(arrOperator[1],getRs.get(arrTarget[1]),getRs.get(arrTarget[2]));
						tong =  Calculator(arrOperator[0],rs,getRs.get(arrTarget[0]));
					}else {
						rs = Calculator(arrOperator[0],getRs.get(arrTarget[0]),getRs.get(arrTarget[1]));
						tong = Calculator(arrOperator[1],rs,getRs.get(arrTarget[2]));
					}
					//}
						//tong = getRs.get(arrTarget[0]) * getRs.get(arrTarget[1])  + getRs.get(arrTarget[2]);
						
						System.out.println(getRs.get(arrTarget[0]));
						System.out.println(getRs.get(arrTarget[1]));
						System.out.println(getRs.get(arrTarget[2]));
						
						
					//}
					getRs.put(idTarget,(int) tong);
					//tong = 0;	
				}
				//System.out.println(map1);
				//return;
			}
			//System.out.println(map1);
		/*	for(Entry<String, String> s : map1.entrySet()){	
				if(map1.get("isModel")=="false") {
					System.out.println(map1);
					//return;
				}

			}
      */	
		}
		System.out.println(list);
	}
	@SuppressWarnings("unchecked")
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		List<HashMap<String, String>> capitalCities = null;
		
		List<Object> list=new ArrayList<Object>();  
		HashMap<String,BigDecimal> hm=new HashMap<String,BigDecimal>();
		HashMap<String,BigDecimal> hi=new HashMap<String,BigDecimal>();
		HashMap<String,BigDecimal> ha=new HashMap<String,BigDecimal>();
		HashMap<String,BigDecimal> hu=new HashMap<String,BigDecimal>();
		HashMap<String,BigDecimal> hl=new HashMap<String,BigDecimal>();
	    hm.put("Hau",new BigDecimal("5"));
	    hm.put("Phuongc",new BigDecimal("5"));
	    hm.put("Hien",new BigDecimal("7"));
	    hm.put("Phuong",new BigDecimal("5"));
	    hm.put("Col",new BigDecimal("4"));

	    hi.put("Hau",new BigDecimal("7"));
	    hi.put("Phuongc",new BigDecimal("5"));
	    hi.put("Hien",new BigDecimal("3"));
	    hi.put("Phuong",new BigDecimal("0"));
	    hi.put("Col",new BigDecimal("8"));
	    
	    ha.put("Hau",new BigDecimal("9"));
	    ha.put("Phuongc",new BigDecimal("4"));
	    ha.put("Hien",new BigDecimal("6"));
	    ha.put("Phuong",new BigDecimal("3"));
	    ha.put("Col",new BigDecimal("6"));
	    
	    hu.put("Hau",new BigDecimal("2"));
	    hu.put("Phuongc",new BigDecimal("4"));
	    hu.put("Hien",new BigDecimal("8"));
	    hu.put("Phuong",new BigDecimal("2"));
	    hu.put("Col",new BigDecimal("6"));
	    
	    hl.put("Hau",new BigDecimal("5"));
	    hl.put("Phuongc",new BigDecimal("4"));
	    hl.put("Hien",new BigDecimal("4"));
	    hl.put("Phuong",new BigDecimal("6"));
	    hl.put("Col",new BigDecimal("6"));
	    list.add(hm);
	    list.add(hi);
	    list.add(ha);
	    list.add(hu);
	    list.add(hl);
	 //-------------------------------------------------------------   
	    
	    List<Object> rowselect=new ArrayList<Object>();  
		HashMap<String,String> h1=new HashMap<String,String>();
		HashMap<String,String> h2=new HashMap<String,String>();
		HashMap<String,String> h3=new HashMap<String,String>();
		HashMap<String,Object> h4=new HashMap<String,Object>();
		HashMap<String,Object> h5=new HashMap<String,Object>();
		String[] opr = {"/","/"};
		String[] op = {"*","/"};
		String[] target = {null,"Hau","Phuong"};
		String[] target2 = {"Hien","Hau","demo"};
	    h1.put("id","col");
	    h1.put("isModel","true");
	    
	    h2.put("id","Hau");
	    h2.put("isModel","true"); 
	    
	    h3.put("id","Hien");
	    h3.put("isModel","true");
	    
	    h4.put("id","demo");
	    h4.put("isModel","false");
	    h4.put("isNull","false");
	    h4.put("isDevZero","false");
	    h4.put("operator",opr);
	    h4.put("targetField",target);
	   
	  /*  h5.put("id","Minh");
	    h5.put("isModel","false");
	    h5.put("operator",opr);
	    h5.put("targetField",target2);*/
	    rowselect.add(h1);
	    rowselect.add(h2);
	    rowselect.add(h3);
	    rowselect.add(h4);
	  // rowselect.add(h5); 
		System.out.println(list);
		
		
	//	System.out.println(rowselect);
		for(int i = 0; i<rowselect.size(); i++ ) {
			Map<String, Object> map1 = (Map<String, Object>) rowselect.get(i);
			//String[] arrTargetField = map1.get("targetField");
			if(map1.get("isModel")=="false") {
			
				String[] arrTarget   = (String[]) map1.get("targetField");
				String[] arrOperator = (String[]) map1.get("operator");
				String idTarget =(String) map1.get("id");
				String isDevZero = (String) map1.get("isDevZero");
				for(int j = 0; j < list.size(); j++) { 
					Map<String, BigDecimal> getRs = (Map<String, BigDecimal>) list.get(j);// get tung object ra
					int iii;
					BigDecimal rs = null;
					BigDecimal tong = null;
					int indexOfOp0 = Arrays.asList(op).indexOf( arrOperator[0]);
					int indexOfOp = Arrays.asList(op).indexOf( arrOperator[1]);
					// calculator
					System.out.println(getRs.get(arrTarget[0]));
					BigDecimal target0 = getRs.get(arrTarget[0])==null? new BigDecimal("10"):getRs.get(arrTarget[0]);
					if(indexOfOp0 <0 && indexOfOp > -1 ) {//
						
						rs   = arrOperator[1].equals("/") && getRs.get(arrTarget[2]).compareTo(BigDecimal.ZERO)==0?new BigDecimal("0")
																		: CalculatorBig(arrOperator[1],getRs.get(arrTarget[1]),getRs.get(arrTarget[2]));
						tong = arrOperator[0].equals("/") && getRs.get(arrTarget[1]).compareTo(BigDecimal.ZERO)==0?new BigDecimal("0")
								: CalculatorBig(arrOperator[0],rs,target0);
					}else {
						BigDecimal zr = new BigDecimal("0");
						rs =arrOperator[0].equals("/") && getRs.get(arrTarget[1]).compareTo(BigDecimal.ZERO)==0?new BigDecimal("0")
								: CalculatorBig(arrOperator[0],target0,getRs.get(arrTarget[1]));
						tong =arrOperator[1].equals("/") && getRs.get(arrTarget[2]).compareTo(BigDecimal.ZERO)==0?new BigDecimal("0")
								: CalculatorBig(arrOperator[1],rs,getRs.get(arrTarget[2]));
					}
					System.out.println(getRs.get(arrTarget[0]));
					System.out.println(getRs.get(arrTarget[1]));
					System.out.println(getRs.get(arrTarget[2]));
					getRs.put(idTarget,tong);
				}
			}

		}
		System.out.println(list);
	}

}
